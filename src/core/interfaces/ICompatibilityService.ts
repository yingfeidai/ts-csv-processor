export interface ICompatibilityService {
  ensureCompatibility<T>(data: T): T
}
