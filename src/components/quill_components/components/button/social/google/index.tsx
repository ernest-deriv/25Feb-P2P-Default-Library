import { forwardRef } from 'react'
import { SocialGoogleBrandIcon } from '@deriv/quill-icons/Social'
import qtMerge from 'qtMerge'
import {
  SocialButtonClassesProps,
  SocialButtonVariantProps,
  baseButtonCVA,
  googleSocialButtonCVA,
  socialButtonIconSize,
  socialButtonSize,
} from 'components/button/button.classes'

export interface SocialGoogleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SocialButtonClassesProps,
    SocialButtonVariantProps {
  hideLabel?: boolean
}

export const SocialGoogleButton = forwardRef<
  HTMLButtonElement,
  SocialGoogleButtonProps
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
          googleSocialButtonCVA({ variant }),
          className,
        )}
        {...rest}
        ref={ref}
      >
        <SocialGoogleBrandIcon {...socialButtonIconSize[size]} />
        {!hideLabel && <span className="flex-1">Google</span>}
      </button>
    )
  },
)

SocialGoogleButton.displayName = 'SocialGoogleButton'

export default SocialGoogleButton
