import { ErrorType } from '../../domain/enums/ErrorType'

export interface ICsvErrorService<T = any> {
  type: ErrorType
  message: string
  row?: {
    index: number
  }
  column?: {
    name: string
    value: string
  }
  details?: T
}
