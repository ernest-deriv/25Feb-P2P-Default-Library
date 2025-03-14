import { Fragment, forwardRef } from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import qtMerge from 'qtMerge'
import {
  inputDropdownPanelClassnames,
  inputDropdownSingleClassnames,
} from './base/base.classnames'
import InputDropdownBase, { InputProps } from './base'

export type TSingleSelectItem = {
  value: number | string
  label: React.ReactNode
}

export interface InputSelectProps extends InputProps {
  options: TSingleSelectItem[]
  defaultOption: TSingleSelectItem
  onSelectionChange: (item: TSingleSelectItem) => void
}
const Options = ({ item }: { item: TSingleSelectItem }) => {
  return (
    <Listbox.Option value={item} as={Fragment}>
      {({ disabled, selected, active }) => (
        <li
          className={qtMerge(
            inputDropdownSingleClassnames,
            disabled && 'opacity-600',
            active && ' bg-opacity-black-100 text-opacity-black-600',
            selected &&
              'bg-solid-slate-1400 fill-solid-slate-50 text-solid-slate-50 hover:bg-solid-slate-1400 hover:fill-solid-slate-50 hover:text-solid-slate-50',
          )}
        >
          {item.label}
        </li>
      )}
    </Listbox.Option>
  )
}

export const InputSelectDropdown = forwardRef<
  HTMLButtonElement,
  InputSelectProps
>(
  (
    {
      defaultOption,
      inputSize,
      icon,
      labelTag,
      disabled,
      options,
      onSelectionChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const [selectedItem, setSelectedItem] =
      useState<TSingleSelectItem>(defaultOption)

    const handleItemSelect = (item: TSingleSelectItem) => {
      setSelectedItem(item)
      onSelectionChange?.(item)
    }

    return (
      <>
        <Listbox value={selectedItem} onChange={handleItemSelect}>
          {({ open }) => (
            <>
              <Listbox.Button as="div">
                <InputDropdownBase
                  {...rest}
                  icon={icon}
                  inputSize={inputSize}
                  labelTag={labelTag}
                  ref={ref}
                  selected={selectedItem.value !== defaultOption.value}
                  isDropdownOpen={open}
                  disabled={disabled}
                >
                  {selectedItem?.label}
                </InputDropdownBase>
              </Listbox.Button>
              <Transition
                enter="transition ease-out duration-200 scale transform"
                enterFrom="scale-y-0"
                enterTo="scale-y-full"
                leave="transition ease-out duration-200 scale transform"
                leaveFrom="scale-y-0 translate-y-0"
                leaveTo="scale-y-0 -translate-y-2/4"
              >
                <Listbox.Options
                  className={qtMerge(inputDropdownPanelClassnames, className)}
                >
                  {options &&
                    options.map((item) => (
                      <Options
                        item={item}
                        key={`chip-selectable-item-${item.value}`}
                      />
                    ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </>
    )
  },
)

InputSelectDropdown.displayName = 'InputSelectDropdown'

export default InputSelectDropdown
