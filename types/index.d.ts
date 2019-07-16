export { TaskHelper, TaskSpinner, Connect } from '../src'

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