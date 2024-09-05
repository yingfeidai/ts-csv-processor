import { CsvParseResult } from '../../domain/entities/CsvParseResult'

export interface IParserService<T> {
  parse(csvData: string): Promise<CsvParseResult<T>>
}
