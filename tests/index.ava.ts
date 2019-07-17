import test from 'ava'
import run, { UP, DOWN, ENTER } from './inquirer-test'

const cliPath: string = __dirname + '/app.ts'



test('Default Press Enter', async t => {
  let result: any = await run([cliPath], [ENTER])
  t.regex(result.toString(), /(initialize)/)
})
