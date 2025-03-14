export type AllSizes =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'

export type StandardSizes = Extract<AllSizes, 'sm' | 'md' | 'lg'>
export type ExtendedStandardSizes = StandardSizes | Extract<AllSizes, 'xl'>
export type ExtendedSizes = Exclude<AllSizes, '2xs' | '2xl' | '3xl' | '4xl'>
export type LargeSizes = Extract<AllSizes, 'md' | 'lg' | 'xl'>
export type ExtraLargeSizes = Exclude<AllSizes, '2xs' | 'xs' | 'sm' | 'md'>
export type SmallSizes = Extract<AllSizes, 'xs' | 'sm' | 'md'>
export type ExtraSmallSizes = Extract<AllSizes, '2xs' | 'xs' | 'xs' | 'sm'>
