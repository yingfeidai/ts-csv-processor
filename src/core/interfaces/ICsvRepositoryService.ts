export interface ICsvRepositoryService {
  readFile(filePath: string): Promise<string>
  writeFile(filePath: string, data: string): Promise<void>
}
