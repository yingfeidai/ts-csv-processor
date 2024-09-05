import { promises as fs } from 'fs'
import { ICsvRepositoryService } from '../../core/interfaces/ICsvRepositoryService'

export class CsvFileSystemRepository implements ICsvRepositoryService {
  async readFile(filePath: string): Promise<string> {
    return fs.readFile(filePath, 'utf-8')
  }

  async writeFile(filePath: string, data: string): Promise<void> {
    await fs.writeFile(filePath, data, 'utf-8')
  }
}
