import { ChipSize } from './types'
import { cva } from 'class-variance-authority'

export const chipBaseVariant = cva('', {
  variants: {
    size: {
      sm: [
        'max-h-1200',
        'w-max',
        'min-w-[56px]',
        'gap-x-400',
        'px-600',
        'py-[3px]',
        'text-50',
      ],
      md: [
        'max-h-1600',
        'w-max',
        'min-w-[72px]',
        'gap-x-400',
        'px-800',
        'py-[5px]',
        'text-75',
      ],
      lg: [
        'max-h-2400',
        'w-max',
        'min-w-[96px]',
        'gap-x-400',
        'px-1200',
        'py-[7px]',
        'text-100',
      ],
    },
    dismissible: {
      true: ['cursor-default'],
      false: ['cursor-pointer'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const ChipIconSizes: Record<
  ChipSize,
  { width: number; height: number }
> = {
  sm: {
    width: 11,
    height: 18,
  },
  md: {
    width: 13,
    height: 22,
  },
  lg: {
    width: 14,
    height: 24,
  },
}

export const ChipStandaloneIconSizes: Record<
  ChipSize,
  { width: number; height: number }
> = {
  sm: {
    width: 22,
    height: 22,
  },
  md: {
    width: 24,
    height: 24,
  },
  lg: {
    width: 26,
    height: 26,
  },
}

export const chipBaseClassnames =
  'inline-flex items-center justify-center rounded-4800 border-75 border-opacity-black-100 font-regular text-typography-default enabled:hover:bg-opacity-black-100 enabled:hover:text-opacity-black-600 disabled:fill-opacity-black-300 disabled:text-opacity-black-300 data-[state=selected]:enabled:border-solid-slate-1200 data-[state=selected]:enabled:bg-solid-slate-1200 data-[state=selected]:enabled:fill-solid-slate-50 data-[state=selected]:enabled:text-solid-slate-50'

export const chipDropdownPanelClassnames =
  'absolute m-200 min-w-[350px] max-w-md cursor-pointer border-75 border-solid-slate-75 bg-solid-slate-50 p-200 shadow-530'

export const chipDropdownMultiClassnames =
  'my-300 flex items-center gap-x-400 rounded-[8px] p-600  py-[3px] text-75 hover:bg-opacity-black-100 hover:text-opacity-black-600'

export const chipDropdownSingleClassnames =
  'my-300 rounded-[8px] px-600 py-300 hover:bg-opacity-black-100 hover:text-opacity-black-600'
