import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './parts/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Friend of the Pod',

  projectId: 'mb6fbzu6',
  dataset: 'production',

  plugins: [deskTool(
    {
      structure: structure,
    }
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },

})
