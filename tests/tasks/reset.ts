
import { TaskSpinner } from '../../src'

export default async function (): Promise<any> {
  // ...
  return TaskSpinner(Promise.resolve(`Reset Finished.`), `Reset Starting ...`)
}
