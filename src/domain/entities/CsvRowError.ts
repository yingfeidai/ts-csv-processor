import { ErrorTypeEnum } from '../enums/ErrorTypeEnum'

export type CsvRowError = {
  rowIndex: number
  column: {
    name: string
    value: string
  }
  error: { type: ErrorTypeEnum; message: string }
}
