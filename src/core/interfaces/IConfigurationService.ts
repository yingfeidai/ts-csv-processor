import { CsvProcessorConfig } from '../config/CsvProcessorConfig'

export interface IConfigurationService {
  getConfig(): CsvProcessorConfig
  setConfig(config: CsvProcessorConfig): void
}
