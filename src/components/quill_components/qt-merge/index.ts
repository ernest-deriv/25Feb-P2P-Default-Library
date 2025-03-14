import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge'
import TokenNames from '../../quill-tailwind/token-names'

export const qtMerge = createTailwindMerge(() => {
  const baseConfig = getDefaultConfig()

  return {
    ...baseConfig,
    theme: {
      ...baseConfig.theme,
      spacing: [...TokenNames.spacing, ...TokenNames.paragraphSpacing],
      borderRadius: [...TokenNames.borderRadius],
      borderWidth: [...TokenNames.borderWidth],
      colors: [...TokenNames.color],
      opacity: [...TokenNames.opacity],
      fontWeight: [...TokenNames.fontWeights],
      leading: [...TokenNames.lineHeights],
    },
    classGroups: {
      ...baseConfig.classGroups,
      'font-family': [...TokenNames.fontFamilies],
      'font-size': [
        {
          text: ['base', ...TokenNames.fontSizes],
        },
      ],
      leading: [
        {
          leading: [...TokenNames.lineHeights],
        },
      ],
      shadow: [
        {
          shadow: [...TokenNames.boxShadow],
        },
      ],
    },
    conflictingClassGroups: {
      ...baseConfig.conflictingClassGroups,
      'font-size': [],
    },
  }
})

export { twJoin as qtJoin } from 'tailwind-merge'
export default qtMerge
