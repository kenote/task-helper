import * as inquirer from 'inquirer'
import ora from 'ora'
import { pick } from 'lodash'
import { TaskSetting, TaskItem, Maps } from '../types'

/**
 * 任务助手类
 */
export class TaskHelper {

  /**
   * 标题
   */
  private __Title: string

  /**
   * 任务列表
   */
  private __Tasks: TaskItem[]

  /**
   * 启动任务
   */
  public async start (): Promise<void> {
    let choices = this.__Tasks.map( item => pick(item, ['name', 'value']) )
    let questions: inquirer.QuestionCollection<{}> = [
      {
        type: 'rawlist',
        name: 'type_name',
        message: /(\:|\：)$/.test(this.__Title) ? this.__Title : `${this.__Title}:`,
        choices
      }
    ]
    let options: Maps<string> = await inquirer.prompt(questions)
    let handers: Maps<any> = {}
    for (let task of this.__Tasks) {
      if (!task.script) continue
      handers[task.value] = async (): Promise<void> => {
        let result = await task.script()
        console.log(``)
        console.log(result)
      }
    }
    handers[options.type_name] && await handers[options.type_name]()
    process.exit(0)
  }

}

/**
 * 连接任务配置
 * @param setting TaskSetting
 */
export function Connect (setting: TaskSetting): any {
  return function (target: any): void {
    target.prototype.__Title = setting.title
    target.prototype.__Tasks = setting.tasks
  }
}

/**
 * TaskSpinner
 * @param task Promise<any>
 * @param options string | ora.Options
 */
export async function TaskSpinner (task: Promise<any>, options?: string | ora.Options): Promise<any> {
  let spinner: ora.Ora = ora(options || `Initialize ...`).start()
  let result: any = await task
  return await new Promise(resolve => {
    setTimeout(() => {
      spinner.stop()
      resolve(result)
    }, 500)
  })
}
