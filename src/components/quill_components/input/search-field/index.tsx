import { ComponentProps, forwardRef } from 'react'
import Input from '../base'
import { StandaloneSearchBoldIcon } from '@deriv/quill-icons/Standalone'

export type SearchFieldProps = ComponentProps<typeof Input>

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ type = 'search', ...rest }, ref) => {
    return (
      <Input {...rest} icon={StandaloneSearchBoldIcon} type={type} ref={ref} />
    )
  },
)

SearchField.displayName = 'SearchField'

export default SearchField
