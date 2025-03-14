import { forwardRef } from 'react'
import { SocialFacebookBrandIcon } from '@deriv/quill-icons/Social'
import qtMerge from 'qtMerge'
import {
  SocialButtonClassesProps,
  SocialButtonVariantProps,
  baseButtonCVA,
  facebookSocialButtonCVA,
  socialButtonIconSize,
  socialButtonSize,
} from 'components/button/button.classes'

export interface FacebookSocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SocialButtonClassesProps,
    SocialButtonVariantProps {
  hideLabel?: boolean
}

export const FacebookSocialButton = forwardRef<
  HTMLButtonElement,
  FacebookSocialButtonProps
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
          facebookSocialButtonCVA({ variant }),
          className,
        )}
        {...rest}
        ref={ref}
      >
        <SocialFacebookBrandIcon {...socialButtonIconSize[size]} fill="#fff" />
        {!hideLabel && <span className="flex-1">Facebook</span>}
      </button>
    )
  },
)

FacebookSocialButton.displayName = 'FacebookSocialButton'

export default FacebookSocialButton
