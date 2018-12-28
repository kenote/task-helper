
import * as inquirer from 'inquirer'
import * as ora from 'ora'
import * as pick from 'lodash/pick'

interface TaskItem {
  name: string;
  value: string;
  script?: any;
}

interface Setting {
  title: string;
  tasks: Array<TaskItem>;
}

interface Options {
  type_name: string
}

export class TaskHelper {
  public __displayTitle: string;
  public __Tasks: Array<TaskItem>;

  public async start () {
    let __Choices: inquirer.ChoiceType[] = this.__Tasks.map( o => pick(o, ['name', 'value']))
    let questions: inquirer.Questions<{}> = [
      {
        type: 'rawlist',
        name: 'type_name',
        message: /(\:|\：)$/.test(this.__displayTitle) ? this.__displayTitle : `${this.__displayTitle}:`,
        choices: __Choices
      }
    ]
    let options: Options = <Options> await inquirer.prompt(questions)
    let handers: object = {}
    for (let task of this.__Tasks) {
      if (!task.script) continue
      handers[task.value] = async () => {
        let result: any = await task.script()
        console.log(``)
        console.log(result)
      }
    }
    handers[options.type_name] && await handers[options.type_name]()
    process.exit(0)
  }
}

export function TaskSetting (setting: Setting): any {
  return function (target: any) {
    target.prototype.__displayTitle = setting.title
    target.prototype.__Tasks = setting.tasks
  }
}

export async function TaskSpinner (task: Promise<any>): Promise<any> {
  let spinner: Ora = ora(`Initialize Data ...`).start()
  let result: any = await task
  return await new Promise((resolve: (value?: {} | PromiseLike<{}> | undefined) => void) => {
    setTimeout(() => {
      spinner.stop()
      resolve(result)
    }, 500)
  })
}

declare class Ora {
  start(text?: string): Ora;
  stop(): Ora;
  succeed(text?: string): Ora;
  fail(text?: string): Ora;
  warn(text?: string): Ora;
  info(text?: string): Ora;
  stopAndPersist(options?: PersistOptions | string): Ora;
  clear(): Ora;
  render(): Ora;
  frame(): Ora;
  text: string;
  color: Color;
  frameIndex: number;
}

interface PersistOptions {
  symbol?: string;
  text?: string;
}

type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';