import { ICsvProcessorConfigService } from '../../domain/entities/ICsvProcessorConfigService'

export interface ICsvProcessingService {
  processFile(
    filePath: string,
    options?: ICsvProcessorConfigService,
  ): Promise<void>
}
