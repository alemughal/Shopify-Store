import dynamic from 'next/dynamic'
import { Builder, builder } from '@builder.io/react'

const Text = dynamic(async () => {
  return (await import('./Text')).default
})

Builder.registerComponent(Text, {
  name: 'Text',
  inputs: [
    {
      name: 'heading',
      type: 'richText',
      defaultValue: '<p>Enter some text...</p>',
    },
    {
        name: 'description',
        type: 'richText',
      },
  ],
})
