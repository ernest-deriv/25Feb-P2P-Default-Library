import { ReactNode } from 'react'
import { EmptyBadge } from './empty'
import { LabelBadge } from './label'

type BadgeVariants = {
  Empty: typeof EmptyBadge
  Label: typeof LabelBadge
}

export const Badge: BadgeVariants = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

Badge.Empty = EmptyBadge
Badge.Label = LabelBadge

export default Badge
