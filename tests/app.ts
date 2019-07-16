import { TaskHelper, Connect } from '../src'
import Initialize from './tasks/initialize'
import Reset from './tasks/reset'

@Connect({
  title: '操作类型:',
  tasks: [
    {
      name: '初始化',
      value: 'initialize',
      script: Initialize
    },
    {
      name: '重置',
      value: 'reset',
      script: Reset
    },
    {
      name: '退出',
      value: 'exit',
      script: () => process.exit(0)
    }
  ]
})
class Task extends TaskHelper {}

new Task().start()
