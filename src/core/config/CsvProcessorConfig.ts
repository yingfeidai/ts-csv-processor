import { IPluginService } from '../interfaces/IPluginService'
import { IValidationLogicService } from '../interfaces/IValidationLogicService'

// Base configuration options
export type CsvBaseConfig = {
  encoding?: string
  header?: boolean
  separator?: string
  skipEmptyLines?: boolean
  batchSize?: number
  workerCount?: number
  customOptions?: Record<string, any>
  metadata?: Record<string, any>
}

// Configuration for validation logic
export type CsvValidationConfig = {
  continueOnError?: boolean
  validationLogic?: IValidationLogicService
}

// Configuration for plugins
export type CsvPluginConfig = {
  plugins?: IPluginService[]
}

// Combined configuration type
export type CsvProcessorConfig = CsvBaseConfig &
  CsvValidationConfig &
  CsvPluginConfig
