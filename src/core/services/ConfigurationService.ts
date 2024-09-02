import { CsvProcessorConfig } from '../config/CsvProcessorConfig'
import { IConfigurationService } from '../interfaces/IConfigurationService'

export class ConfigurationService implements IConfigurationService {
  private config: CsvProcessorConfig

  constructor(defaultConfig?: CsvProcessorConfig) {
    this.config = defaultConfig || {}
  }

  getConfig(): CsvProcessorConfig {
    return this.config
  }

  setConfig(config: CsvProcessorConfig): void {
    this.config = config
  }
}
