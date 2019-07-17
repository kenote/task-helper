import test from 'ava'
import run, { UP, DOWN, ENTER } from './inquirer-test'

const cliPath: string = __dirname + '/app.ts'

test('Default Press Enter', async t => {
  let result: any = await run([cliPath], [ENTER])
  t.regex(result.toString(), /(initialize)/)
})

test('Press Down > Enter', async t => {
  let result: any = await run([cliPath], [DOWN, ENTER])
  t.regex(result.toString(), /(reset)/)
})

test('Press Down > Up > Enter', async t => {
  let result: any = await run([cliPath], [DOWN, UP, ENTER])
  t.regex(result.toString(), /(initialize)/)
})

test('Input & Press Enter', async t => {
  let result: any = await run([cliPath], ['3', ENTER])
  t.regex(result.toString(), /(exit)/)
})
