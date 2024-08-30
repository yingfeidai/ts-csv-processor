export type ValidationTiming =
  | 'beforeParse'
  | 'afterParse'
  | 'beforeBatchProcess'
  | 'afterBatchProcess'

export interface IValidationLogicService {
  validateFile?(file: string): boolean
  validateHeader?(headers: string[]): boolean
  validateRow?(row: string[]): boolean
  validateColumn?(column: string[]): boolean
  customValidators?(timing: ValidationTiming): Array<(data: any) => boolean>
}
