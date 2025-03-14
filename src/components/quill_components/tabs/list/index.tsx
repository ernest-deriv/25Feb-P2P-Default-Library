import { ComponentProps } from 'react'
import qtMerge from 'qtMerge'

type TabListProps = ComponentProps<'div'>

export const TabList = ({ children, className }: TabListProps) => {
  return (
    <div className={qtMerge('relative flex justify-center', className)}>
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="no-scrollbar flex max-w-[calc(100vh-15px)] snap-x snap-mandatory overflow-x-auto overscroll-contain"
        role="tablist"
        aria-orientation="horizontal"
      >
        {children}
      </div>
    </div>
  )
}
