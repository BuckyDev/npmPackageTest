const exec = require('child_process').exec

const useLibrary = require('./src/useLibrary')

export default function renderLibrary(Library) {
  useLibrary(Library)
  exec("npm start")
}
