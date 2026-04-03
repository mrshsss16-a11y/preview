import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'aura-marketing-studio',
  title: 'لوحة تحكم أورا للتسويق',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
