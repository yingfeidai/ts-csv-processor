export interface ICsvProcessingService {
  process(filePath: string): Promise<void>
}
