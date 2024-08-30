import { ICsvProcessorConfigService } from '../../domain/entities/ICsvProcessorConfigService'

export interface IConfigurationService {
  getConfig(): ICsvProcessorConfigService
  setConfig(config: ICsvProcessorConfigService): void
}
