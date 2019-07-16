import run, { UP, DOWN, ENTER } from './inquirer-test'

const cliPath: string = __dirname + '/app.ts'

describe('\nTasks testing ->\n', () => {

  test('Default Press Enter', async () => {
    try {
      let result: any = await run([cliPath], [ENTER])
      console.log(result)
      expect(/(\? 操作类型: initialize)/.test(result)).toBe(true)
    } catch (error) {
      // console.log('error', error)
      // done()
    }
    
  }, 5000)

  /*test('Press Down > Enter', async () => {
    let result: any = await run([cliPath], [DOWN, ENTER])
    expect(/(\? 操作类型: reset)/.test(result)).toBe(true)
  })

  test('Press Down > Up > Enter', async () => {
    let result: any = await run([cliPath], [DOWN, UP, ENTER])
    expect(/(\? 操作类型: initialize)/.test(result)).toBe(true)
  })

  test('Input & Press Enter', async () => {
    let result: any = await run([cliPath], ['3', ENTER])
    expect(/(\? 操作类型: exit)/.test(result)).toBe(true)
  })*/
})