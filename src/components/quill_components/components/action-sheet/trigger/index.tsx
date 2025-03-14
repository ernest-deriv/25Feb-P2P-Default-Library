import { ComponentProps, useContext } from 'react'
import { Button } from '../../button'
import { ActionSheetContext } from '../root'
import { QuillIconComponent } from 'types'

type ButtonTriggerProps = ComponentProps<typeof Button> & {
  iconComponent?: never
  iconClassName?: never
}

type IconTriggerProps = {
  iconComponent?: QuillIconComponent
  className?: string
  iconClassName?: string
}

type TriggerProps = ButtonTriggerProps | IconTriggerProps

const Trigger = ({
  iconComponent: Icon,
  iconClassName,
  ...restProps
}: TriggerProps) => {
  const { handleOpen } = useContext(ActionSheetContext)
  if (Icon) {
    return (
      <button onClick={handleOpen} {...restProps}>
        <Icon
          data-testid="dt-actionsheet-icon-button"
          className={iconClassName}
        />
      </button>
    )
  }
  return <Button onClick={handleOpen} {...restProps} />
}

Trigger.displayName = 'Trigger'

export default Trigger
