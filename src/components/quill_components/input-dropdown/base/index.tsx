import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons/Standalone'
import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  forwardRef,
} from 'react'
import qtMerge, { qtJoin } from 'qtMerge'
import { QuillSvgProps } from '@deriv/quill-icons'
import {
  InputSize,
  InputStatus,
  InputTextAlignment,
  InputVariant,
} from 'components/input/base'
import {
  baseInputWrapperVariants,
  baseLabelVariant,
  baseStatusMessageVariants,
  iconSize,
  statusIconColours,
} from './base.classnames'

export interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  statusIcon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  inputSize?: InputSize
  status?: InputStatus
  disabled?: boolean
  variant?: InputVariant
  leftStatusMessage?: string
  textAlignment?: InputTextAlignment
  labelTag?: string
  value?: string
  selected?: boolean
  onInputSelect?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: boolean,
  ) => void
  isDropdownOpen?: boolean
}
export const InputDropdownBase = forwardRef<HTMLButtonElement, InputProps>(
  (
    {
      className,
      children,
      icon: Icon,
      isDropdownOpen,
      selected,
      textAlignment = 'left',
      leftStatusMessage,
      variant = 'outline',
      labelTag,
      status = 'neutral',
      statusIcon: StatusIcon,
      onInputSelect,
      inputSize = 'md',
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (selected === undefined) {
        const target = event.currentTarget
        const isSelected = target.getAttribute('data-state') === 'selected'
        const selected_state = isSelected ? '' : 'selected'
        target.setAttribute('data-state', selected_state)
        onInputSelect?.(event, !isSelected)
      } else {
        onInputSelect?.(event, selected)
      }
    }

    return (
      <>
        <button
          {...rest}
          className={qtMerge(
            baseInputWrapperVariants({
              size: inputSize,
              status: status,
              alignment: textAlignment,
              className,
              variant,
            }),
          )}
          data-state={selected ? 'selected' : ''}
          ref={ref}
          onClick={handleClick}
        >
          <div>{Icon && <Icon {...iconSize[inputSize]} />}</div>

          <div className="relative grow transition-transform duration-1000 ease-in-out">
            {labelTag && inputSize === 'md' && (
              <label
                className={qtJoin(
                  baseLabelVariant({ status, alignment: textAlignment }),
                )}
              >
                {labelTag} <p className="text-typography-link"> *</p>
              </label>
            )}
            <div> {children}</div>
          </div>
          {StatusIcon && (
            <div>
              <StatusIcon
                {...iconSize[inputSize]}
                className={qtJoin(statusIconColours[status])}
              />
            </div>
          )}
          <div>
            <StandaloneChevronDownRegularIcon
              data-state={isDropdownOpen ? 'open' : 'close'}
              className="transition-transform duration-300 data-[state=open]:rotate-180"
              {...iconSize[inputSize]}
            />
          </div>
        </button>

        {leftStatusMessage && !isDropdownOpen && (
          <div className="flex justify-between pt-200">
            <p
              key={leftStatusMessage}
              className={qtJoin(baseStatusMessageVariants({ status }))}
            >
              {leftStatusMessage}
            </p>
          </div>
        )}
      </>
    )
  },
)

InputDropdownBase.displayName = 'InputDropdownBase'

export default InputDropdownBase
