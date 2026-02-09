import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('../podprompt-infra/certs/podprompt.key'),
      cert: fs.readFileSync('../podprompt-infra/certs/podprompt.crt'),
    },
    host: true
  }
})