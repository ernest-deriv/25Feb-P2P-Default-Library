import { twMerge } from 'tailwind-merge'

export const AppLayout = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge('bg-background-primary-container', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default AppLayout
