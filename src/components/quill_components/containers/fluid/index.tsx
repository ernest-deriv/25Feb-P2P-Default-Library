import qtMerge from 'qtMerge'
import { type HtmlHTMLAttributes } from 'react'

export const FluidContainer = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={qtMerge(
        'mx-auto w-full max-w-[1232px] px-800 md:px-1200 min-[1232px]:px-general-none',
        className,
      )}
      {...rest}
    />
  )
}
export default FluidContainer
