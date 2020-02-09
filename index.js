const exec = require('child_process').exec

import useLibrary from './src/useLibrary'

export default function renderLibrary(Library) {
  useLibrary(Library)
  exec("npm start")
}
