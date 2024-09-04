import { CsvRowError } from './CsvRowError'
import { CsvRowSuccess } from './CsvRowSuccess'

export type CsvParseResult<T> = {
  success: CsvRowSuccess<T>[]
  errors: CsvRowError[]
}
