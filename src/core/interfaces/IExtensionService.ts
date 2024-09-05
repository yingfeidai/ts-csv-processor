import { IPluginService } from './IPluginService'

export interface IExtensionService {
  loadPlugins(plugins: IPluginService[]): void
  applyExtensions<T>(data: T[]): T[]
}
