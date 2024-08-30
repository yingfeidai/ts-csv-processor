import { ICsvErrorService } from './ICsvErrorService'

export interface IErrorHandlingService<T = any> {
  handleError(error: ICsvErrorService<T>): void
  generateErrorReport(errors: ICsvErrorService<T>[]): string
  fixError(error: ICsvErrorService<T>): boolean
  recoverFromError(error: ICsvErrorService<T>): void
  getErrors(): ICsvErrorService[]
  addError(error: ICsvErrorService<T>): void
}
