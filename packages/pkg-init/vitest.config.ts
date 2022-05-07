import { resolve } from 'path'
import { defineConfig, AliasOptions } from 'vite'

const r = (p: string) => resolve(__dirname, p)

export const alias: AliasOptions = {
  'pkg-init': r('./src/'),
}

export default defineConfig({
  resolve: {
    alias,
  },
})
