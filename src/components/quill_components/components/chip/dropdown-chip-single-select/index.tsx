import { Fragment, forwardRef } from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import SelectableChip from '../selectable-chip'
import type { SingleSelectChipProps, TSingleSelectItem } from '../types'
import qtMerge from 'qtMerge'
import {
  chipDropdownPanelClassnames,
  chipDropdownSingleClassnames,
} from '../chip.classnames'

const Options = ({ item }: { item: TSingleSelectItem }) => {
  return (
    <Listbox.Option value={item} as={Fragment} disabled={item.disabled}>
      {({ disabled, selected }) => (
        <li
          className={qtMerge(
            chipDropdownSingleClassnames,
            disabled && 'opacity-600',
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

export const DropdownChipSingleSelect = forwardRef<
  HTMLButtonElement,
  SingleSelectChipProps
>(
  (
    {
      defaultOption,
      size,
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
      <div className="flex flex-col">
        <Listbox value={selectedItem} onChange={handleItemSelect}>
          {({ open }) => (
            <>
              <Listbox.Button as="div">
                <SelectableChip
                  {...rest}
                  icon={icon}
                  size={size}
                  labelTag={labelTag}
                  ref={ref}
                  dropdown
                  selected={selectedItem.value !== defaultOption.value}
                  isDropdownOpen={open}
                  disabled={disabled}
                >
                  {selectedItem?.label}
                </SelectableChip>
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
                  className={qtMerge(chipDropdownPanelClassnames, className)}
                >
                  <Options item={defaultOption} />
                  {options.map((item) => (
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
      </div>
    )
  },
)

DropdownChipSingleSelect.displayName = 'DropdownChipSingleSelect'

export default DropdownChipSingleSelect
