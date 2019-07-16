# task-helper

Task's Helper.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Gratipay][licensed-image]][licensed-url]

## Installation

```bash
npm install kenote-task-helper
# Or
$ yarn add kenote-task-helper
```

## Usages

`task.ts`

```ts
import { TaskHelper, Connect } from 'kenote-task-helper'
import initialize from './tasks/initialize'
import Reset from './tasks/reset'

@Connect({
  title: '操作类型:',
  tasks: [
    { 
      name: '初始化', 
      value: 'initialize',
      script: initialize
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
```

`task/initialize.ts`

```ts
import { TaskSpinner } from 'kenote-task-helper'

export default async function initialize (): Promise<any> {
  await Promise.all([
    ...
  ])
  ...
  return TaskSpinner(Promise.resolve(`Initialize Finished.`))
}
```

## Run

```bash
$ ts-node ./task.ts

? 选择操作类型:
  1) 初始化
  2) 重置
  3) 退出
  Answer: 1
```

## License

this repo is released under the [MIT License](https://github.com/kenote/task-helper/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/kenote-task-helper.svg
[npm-url]: https://www.npmjs.com/package/kenote-task-helper
[downloads-image]: https://img.shields.io/npm/dm/kenote-task-helper.svg
[downloads-url]: https://www.npmjs.com/package/kenote-task-helper
[travis-image]: https://travis-ci.com/kenote/task-helper.svg?branch=master
[travis-url]: https://travis-ci.com/kenote/task-helper
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/kenote/task-helper/blob/master/LICENSE