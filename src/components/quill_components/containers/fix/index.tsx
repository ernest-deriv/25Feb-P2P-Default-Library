import qtMerge from 'qtMerge'
import { HtmlHTMLAttributes } from 'react'

export const FixContainer = ({
  children,
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={qtMerge('w-full', className)} {...rest}>
      {children}
    </div>
  )
}

export default FixContainer
