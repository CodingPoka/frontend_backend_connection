This repo is about how to connect frontend and backend and for this 
in frontend inside vite.config.js file we have to add extra this 
 server:{
    proxy:{
      "/api":"http://localhost:3333"
    }
  } 
this thing and here http://localhost:3333 here port number is my backend
port number in which port number my backend is running .
And fully it will look like this

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://localhost:3333"
    }
  },
  plugins: [react()],
})
