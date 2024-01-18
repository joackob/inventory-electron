import { spawn } from 'node:child_process'

const pb = spawn('./pb/pocketbase.exe', ['serve'])

const pb_info = {
  uri_server: 'http://127.0.0.1',
  port_server: '8090',
  uri_api: 'http://127.0.0.1:8090',
  uri_ui: 'http://127.0.0.1:8090/_/'
}

export { pb, pb_info }
