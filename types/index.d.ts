import ora from 'ora'

/**
 * 连接任务配置
 * @param setting TaskSetting
 */
export declare function Connect (setting: TaskSetting): any

/**
 * TaskSpinner
 * @param task Promise<any>
 * @param options string | ora.Options
 */
export declare function TaskSpinner (task: Promise<any>): Promise<any>
export declare function TaskSpinner (task: Promise<any>, options: string | ora.Options): Promise<any>

/**
 * 任务助手类
 */
export declare class TaskHelper {

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
  public start (): Promise<void>
}

/**
 * 任务单元
 */
export interface TaskItem {

  /**
   * 名称
   */
  name               : string

  /**
   * 键值
   */
  value              : string

  /**
   * 运行脚本
   */
  script            ?: any
}

/**
 * 任务配置
 */
export interface TaskSetting {

  /**
   * 标题
   */
  title              : string

  /**
   * 
   */
  tasks              : TaskItem[]
}

export interface Maps<T> extends Record<string, T> {} 