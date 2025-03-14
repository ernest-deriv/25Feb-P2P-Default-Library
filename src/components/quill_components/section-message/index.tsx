import { ReactNode } from 'react'
import { InformationBox } from './information'

type SectionMessageVariants = {
  Information: typeof InformationBox
}

export const SectionMessage: SectionMessageVariants = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

SectionMessage.Information = InformationBox

export default SectionMessage
