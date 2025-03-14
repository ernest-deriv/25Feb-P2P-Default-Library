import { chipBaseVariant } from './chip.classnames'
import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull, QuillIconComponent } from 'types'

export type ChipSize = 'sm' | 'md' | 'lg'

export type TBaseChipVariant = VariantProps<typeof chipBaseVariant>
type BaseChipVariantExcludingNull = ExcludeNull<TBaseChipVariant, 'size'>

export interface BaseChipProps
  extends BaseChipVariantExcludingNull,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  dismissible?: boolean
  icon?: QuillIconComponent
  labelTag?: string
  disabled?: boolean
}

export interface SelectableChipProps extends BaseChipProps {
  isDropdownOpen?: boolean
  dropdown?: boolean
  selected?: boolean
  labelTag?: string
  onChipSelect?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: boolean,
  ) => void
  onDismiss?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export interface DismissibleChipProps extends BaseChipProps {
  disabled?: boolean
  onDismiss?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export type TSingleSelectItem = {
  value: number | string
  label: React.ReactNode
  disabled?: boolean
}

export interface SingleSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  defaultOption: TSingleSelectItem
  onSelectionChange: (item: TSingleSelectItem) => void
}

export interface MultiSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  label: string
  onSelectionChange: (item: TSingleSelectItem[]) => void
}
