import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const certPath = path.resolve(__dirname, '../podprompt-infra/certs/podprompt.key')
const certExists = fs.existsSync(certPath)

export default defineConfig({
  plugins: [react()],
  server: certExists ? {
    https: {
      key: fs.readFileSync(certPath),
      cert: fs.readFileSync(path.resolve(__dirname, '../podprompt-infra/certs/podprompt.crt')),
    },
    host: true
  } : {
    host: true
  }
})