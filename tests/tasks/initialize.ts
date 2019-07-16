
import { TaskSpinner } from '../../src'

export default async function (): Promise<any> {
  // ...
  return TaskSpinner(Promise.resolve(`Initialize Finished.`))
}
