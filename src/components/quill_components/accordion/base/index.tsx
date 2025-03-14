import { AccordionProps, sizeVariant } from '../types'
import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons/Standalone'
import { useCallback, useEffect, useRef, useState } from 'react'
import qtMerge, { qtJoin } from 'qtMerge'
import { Text } from 'components/typography'
import {
  accordionBaseVariant,
  accordionDisabledClassNames,
  accordionStateClassNames,
  accordionTransitionClassNames,
} from '../accordion.classnames'

export const Base = ({
  id,
  className,
  title = '',
  subtitle,
  content: Content,
  expanded = false,
  icon: Icon,
  iconSize = 'sm',
  size = 'sm',
  divider = 'none',
  disabled = false,
  expandedColor,
  customContent: CustomContent,
  contentClassname,
  onExpand,
}: AccordionProps) => {
  const [isExpanded, setExpanded] = useState(expanded)
  const [isAutoExpand, setAutoExpand] = useState(false)

  const accordionElement = useRef<HTMLDivElement>(null)

  const toggleCollapse = useCallback(() => {
    setExpanded((current) => !current)
    setAutoExpand(false)
    scrollToExpanded(500)

    if (onExpand) {
      onExpand(!isExpanded, title)
    }
  }, [isExpanded, onExpand, title])

  // Handle Collapse via Keyboard
  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
        if (accordionElement.current === document.activeElement) {
          toggleCollapse()
        }
      }
    },
    [toggleCollapse],
  )

  // Scroll to expanded item
  const scrollToExpanded = (delay = 1000) => {
    const accElement = accordionElement.current

    if (accElement) {
      setTimeout(() => {
        accElement.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        })
      }, delay)
    }
  }

  // Handle auto expand and auto scroll on hash targets
  useEffect(() => {
    const hashWithoutSymbol =
      typeof window !== 'undefined' && window.location.hash.slice(1)

    if (hashWithoutSymbol === id) {
      setAutoExpand(true)
      scrollToExpanded()
    }
  }, [id])

  // Key handlers
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])

  useEffect(() => {
    setExpanded(expanded)
  }, [expanded])

  return (
    <div
      data-id={id}
      ref={accordionElement}
      tabIndex={0}
      className={accordionBaseVariant({
        divider,
        className: className,
        disabled,
        expandedColor: expandedColor && isExpanded,
      })}
    >
      <div
        className={qtMerge(
          'flex cursor-pointer items-center justify-between',
          'gap-general-lg p-general-lg',
          accordionStateClassNames,
          disabled && accordionDisabledClassNames,
          contentClassname,
        )}
        onClick={() => toggleCollapse()}
        data-testid="toggle-expand"
      >
        {CustomContent ? (
          <CustomContent />
        ) : (
          <>
            {Icon && (
              <div className="flex" data-testid="icon">
                {<Icon iconSize={iconSize} />}
              </div>
            )}
            <div className={'flex w-full flex-col items-start gap-general-xs'}>
              <Text
                size={sizeVariant[size]}
                className={qtJoin(
                  'overflow-hidden',
                  disabled && 'text-opacity-black-300',
                )}
              >
                {title}
              </Text>
              {subtitle && (
                <Text
                  size={size}
                  className={qtJoin(
                    'overflow-hidden text-typography-subtle',
                    disabled && 'text-opacity-black-300',
                  )}
                >
                  {subtitle}
                </Text>
              )}
            </div>
          </>
        )}
        <div
          className={qtMerge(
            'cursor-pointer',
            accordionTransitionClassNames,
            (isAutoExpand || isExpanded) && 'rotate-180 ',
          )}
          data-testid="chevron"
        >
          <StandaloneChevronDownRegularIcon iconSize="sm" />
        </div>
      </div>
      <div
        className={qtMerge(
          'max-h-[0px] overflow-hidden',
          accordionTransitionClassNames,
          disabled && 'opacity-300',
          (isAutoExpand || isExpanded) && 'max-h-[9999px]',
        )}
        data-testid="expanded-content"
      >
        <div
          className={qtMerge(
            'flex h-fit p-general-lg',
            (isAutoExpand || isExpanded) && 'opacity-1300',
          )}
        >
          {Content && <Content />}
        </div>
      </div>
    </div>
  )
}

Base.displayName = 'AccordionBase'

export default Base
