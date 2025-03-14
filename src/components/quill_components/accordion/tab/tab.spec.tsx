import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Accordion from '.'
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone'
import { AccordionProps } from '../types'
import { AccordionVariants } from '..'

const Variants: (keyof AccordionVariants)[] = [
  'Flush',
  'Fill',
  'Outline',
  'Elevate',
]

const childTitle = 'This is the title'
const subTitle = 'Subtitle goes here'
const title = 'Title goes here'

const data: AccordionProps[][] = [
  [
    {
      icon: StandaloneAndroidIcon,
      title: childTitle,
      subtitle: subTitle,
      className: 'border-opacity-black-100 border-x-none',
      content: () => (
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/640x320"
          alt="Placeholder"
        />
      ),
    },
  ],
]

describe('Accordion', () => {
  it('renders with correct class names and content', () => {
    const { getByText, getByAltText } = render(
      <Accordion
        title={title}
        subtitle={subTitle}
        variant="Flush"
        content={{
          data,
        }}
      />,
    )
    expect(getByText(title)).toBeInTheDocument()

    expect(getByText(title)).toBeInTheDocument()

    expect(getByText(subTitle)).toBeInTheDocument()

    expect(getByAltText('Placeholder')).toBeInTheDocument()
  })

  Variants.forEach((variant) => {
    it(`should render ${variant} correctly`, () => {
      const { container } = render(
        <Accordion
          title={title}
          subtitle={subTitle}
          variant={variant}
          content={{
            data,
          }}
        />,
      )

      expect(container).toMatchSnapshot()
    })
  })
})
