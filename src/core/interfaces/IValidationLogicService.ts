export type ValidationTiming =
  | 'beforeParse'
  | 'afterParse'
  | 'beforeBatchProcess'
  | 'afterBatchProcess'

export interface IValidationLogicService {
  validateFile?(size: number): boolean
  validateName?(file: string, fileNamePattern: RegExp): boolean
  validateHeader?(
    headers: string[],
    requiredHeaders: string[],
    optionalHeaders: string[],
  ): boolean
  validateRow?(row: string[]): boolean
  validateColumn?(column: string[]): boolean
  customValidators?(timing: ValidationTiming): Array<(data: any) => boolean>
}
