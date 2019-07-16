import * as path from 'path'
import { spawn, ChildProcessWithoutNullStreams } from 'child_process'

const concat = require('concat-stream')

export default function (args: string[], combo: string[], timeout: number = 200): Promise<any> {
  let command: string = 'node'
  if (args.length > 0) {
    let extname: string = path.extname(args[0])
    if (/\.(ts)/.test(extname)) command = 'ts-node'
  }
  let proc: ChildProcessWithoutNullStreams = spawn(command, args, { stdio: [null, null, null] })
  proc.stdin.setDefaultEncoding('utf-8')

  let loop = function (combo: string[]): void {
    if (combo.length > 0) {
      setTimeout( () => {
        proc.stdin.write(combo[0])
        loop(combo.slice(1))
      }, timeout)
    } else {
      proc.stdin.end()
    }
  }

  loop(combo)

  return new Promise( (resolve, reject) => {
    proc.stdout.pipe( concat( result => {
      if (result) {
        resolve(result.toString())
      }
      else {
        reject('null')
      }
      
    }))

  })
}

export const DOWN: string = '\x1B\x5B\x42'
export const UP: string = '\x1B\x5B\x41'
export const ENTER: string = '\x0D'
