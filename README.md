# task-helper
Task's Helper

## Installation

```bash
$ yarn add kenote-task-helper
```

## Usages

`task.ts`

```ts
import { TaskHelper, TaskSetting } from 'kenote-task-helper'
import initialize from './task/initialize'

@TaskSetting({
  title: '选择操作类型:',
  tasks: [
    { 
      name: '初始化数据', 
      value: 'initialize',
      script: initialize
    },
    { 
      name: '修改管理员密码', 
      value: 'editpwd' 
    },
    { 
      name: '重启服务', 
      value: 'restart' 
    },
  ]
})
class Task extends TaskHelper {}

new Task().start()
```

`task/initialize.ts`

```ts
export default async function initialize (): Promise<any> {
  return await Promise.all([
    ...
  ])
}
```

## Run

```bash
$ node ./task.js

? 选择操作类型:
  1) 初始化数据
  2) 修改管理员密码
  3) 重启服务
  Answer: 
```

## License

this repo is released under the [MIT License](https://github.com/kenote/mongoose-helper/blob/master/LICENSE).