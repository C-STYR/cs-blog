import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { codeInput } from '@sanity/code-input'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Production',
    basePath: '/production',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: 'production',

    plugins: [deskTool(), visionTool(), codeInput()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'dev-workspace',
    title: 'Development',
    basePath: '/development',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: 'development',

    plugins: [deskTool(), visionTool(), codeInput()],

    schema: {
      types: schemaTypes,
    },
  },
])
