import { useState } from 'react'
import { AccordionTabProps } from '../types'
import qtMerge, { qtJoin } from 'qtMerge'
import styles from './styles.module.scss'
import Chip from 'components/chip'
import Base from '..'

export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .trim()

export const Accordion = ({
  tab,
  variant = 'Elevate',
  content,
  multiCollapse = false,
  ...rest
}: AccordionTabProps) => {
  const [expanded, setExpanded] = useState('')
  const [selectedChip, setSelectedChip] = useState(0)

  const handleExpand = (isExpanded: boolean, id: string) => {
    if (!multiCollapse) {
      if (isExpanded) {
        setExpanded(id)
      }
    }
  }

  const handleChip = (id: number) => {
    if (selectedChip !== id) {
      setSelectedChip(id)
      setExpanded('')
    }
  }

  const chipAlignment = {
    center: 'mx-auto',
    end: 'ml-auto',
  }

  const DynamicAccordion = Base[variant]

  return (
    <div className="flex flex-col">
      {tab && tab.data.length > 0 && (
        <div
          className={qtJoin(
            'flex max-w-full gap-gap-md overflow-x-scroll pb-general-lg',
            styles['scrollbar_hide'],
            tab.align ? chipAlignment[tab.align] : 'mr-auto',
          )}
        >
          {tab.data.map((item) => (
            <Chip.Selectable
              key={item.id}
              selected={selectedChip === item.id}
              onChipSelect={() => handleChip(item.id)}
              className="whitespace-nowrap"
            >
              {item.title}
            </Chip.Selectable>
          ))}
        </div>
      )}

      <div
        className={qtMerge(
          'flex w-full flex-col gap-gap-md',
          content?.className,
        )}
      >
        {content &&
          content.data[selectedChip].map((accData) => {
            const { title: accTitle } = accData
            const id = slugify(accTitle as string)

            return (
              <DynamicAccordion
                {...accData}
                id={id}
                key={accTitle}
                expanded={multiCollapse ? false : expanded === accTitle}
                onExpand={(isExpanded, id) => handleExpand(isExpanded, id)}
                {...rest}
              />
            )
          })}
      </div>
    </div>
  )
}

Accordion.displayName = 'Accordion'

export default Accordion
