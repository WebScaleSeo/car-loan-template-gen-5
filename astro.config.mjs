import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [
    react({ include: ['**/*.jsx', '**/*.tsx'] }),
    tailwind(),
  ],
  output: 'static',
  site: 'https://placeholder.com',
  trailingSlash: 'never',
})
