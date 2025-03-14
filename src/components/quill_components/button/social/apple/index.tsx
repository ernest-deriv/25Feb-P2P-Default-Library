import { forwardRef } from 'react'
import { SocialAppleBlackIcon } from '@deriv/quill-icons/Social'
import qtMerge, { qtJoin } from 'qtMerge'
import {
  SocialButtonVariantProps,
  SocialButtonClassesProps,
  appleSocialButtonCVA,
  baseButtonCVA,
  socialButtonIconSize,
  socialButtonSize,
} from 'components/button/button.classes'

export interface SocialAppleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SocialButtonClassesProps,
    SocialButtonVariantProps {
  hideLabel?: boolean
}

export const SocialAppleButton = forwardRef<
  HTMLButtonElement,
  SocialAppleButtonProps
>(
  (
    {
      size = 'md',
      variant = 'primary',
      hideLabel = false,
      fullWidth,
      isLoading,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        className={qtMerge(
          baseButtonCVA({ fullWidth, isLoading }),
          socialButtonSize({
            size,
            componentType: hideLabel ? 'icon-only' : 'with-label',
          }),
          appleSocialButtonCVA({ variant }),
          className,
        )}
        {...rest}
        ref={ref}
      >
        <SocialAppleBlackIcon
          {...socialButtonIconSize[size]}
          fill="#fff"
          className={qtJoin(
            variant === 'primary' && '[&>g]:fill-solid-slate-50',
          )}
        />
        {!hideLabel && <span className="flex-1">Apple</span>}
      </button>
    )
  },
)

SocialAppleButton.displayName = 'SocialAppleButton'

export default SocialAppleButton
