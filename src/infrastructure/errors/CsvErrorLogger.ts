import * as fs from 'fs'
import { IErrorHandlingService } from '../../core/interfaces/IErrorHandlingService'
import { ICsvErrorService } from '../../core/interfaces/ICsvErrorService'

export class CsvErrorLogger implements IErrorHandlingService {
  private errors: ICsvErrorService[] = []

  constructor(private logFilePath: string = 'error.log') {}

  handleError(error: ICsvErrorService): void {
    const errorMessage = `${error.type} at row ${error.row?.index}, column ${error.column?.name}: ${error.message}\n`
    this.errors.push(error)
    fs.appendFileSync(this.logFilePath, errorMessage)
  }

  generateErrorReport(errors: ICsvErrorService[]): string {
    return errors
      .map(
        (error) =>
          `${error.type} at row ${error.row?.index}, column ${error.column?.name}: ${error.message}`,
      )
      .join('\n')
  }

  fixError(error: ICsvErrorService): boolean {
    return false
  }

  recoverFromError(error: ICsvErrorService): void {}

  getErrors(): ICsvErrorService[] {
    return this.errors
  }

  addError(error: ICsvErrorService): void {
    this.errors.push(error)
  }
}
