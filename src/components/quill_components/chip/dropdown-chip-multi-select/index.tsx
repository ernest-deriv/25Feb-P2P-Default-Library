import { Fragment, forwardRef } from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import SelectableChip from '../selectable-chip'
import type { MultiSelectChipProps, TSingleSelectItem } from '../types'
import {
  LabelPairedSquareCheckSmFillIcon,
  LabelPairedSquareSmRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import {
  chipDropdownPanelClassnames,
  chipDropdownMultiClassnames,
} from '../chip.classnames'
import qtMerge from 'qtMerge'

const Options = ({
  position,
  options,
}: {
  position: number
  options: TSingleSelectItem[]
}) => {
  const item = options[position]
  return (
    <Listbox.Option value={position} as={Fragment} disabled={item.disabled}>
      {({ disabled, selected }) => (
        <li
          className={qtMerge(
            disabled && 'opacity-600',
            chipDropdownMultiClassnames,
          )}
        >
          <span>
            {selected ? (
              <LabelPairedSquareCheckSmFillIcon />
            ) : (
              <LabelPairedSquareSmRegularIcon />
            )}
          </span>
          <span>{item.label}</span>
        </li>
      )}
    </Listbox.Option>
  )
}

export const DropdownChipMultiSelect = forwardRef<
  HTMLButtonElement,
  MultiSelectChipProps
>(
  (
    {
      label,
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
    const [selectedItems, setSelectedItems] = useState<Array<number>>([])

    const handleItemSelect = (items: Array<number>) => {
      setSelectedItems(items)
      const updatedSelectionList = items.map((item) => options[item])
      onSelectionChange?.(updatedSelectionList)
    }

    return (
      <div className="flex flex-col">
        <Listbox value={selectedItems} onChange={handleItemSelect} multiple>
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
                  selected={selectedItems.length > 0}
                  isDropdownOpen={open}
                  disabled={disabled}
                >
                  <span>{label}</span>
                  <span>
                    {selectedItems.length > 0 && (
                      <span className="p-200">({selectedItems.length})</span>
                    )}
                  </span>
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
                  {options.map((item, index) => (
                    <Options
                      position={index}
                      options={options}
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

DropdownChipMultiSelect.displayName = 'DropdownChipMultiSelect'

export default DropdownChipMultiSelect
