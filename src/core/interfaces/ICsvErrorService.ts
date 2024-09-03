import { ErrorTypeEnum } from '../../domain/enums/ErrorTypeEnum'

export interface ICsvErrorService<T = any> {
  type: ErrorTypeEnum
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
