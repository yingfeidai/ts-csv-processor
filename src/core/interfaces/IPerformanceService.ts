export interface IPerformanceService {
  batchProcess<T>(
    items: T[],
    batchSize: number,
    processFunction: (batch: T[]) => Promise<void>
  ): Promise<void>;
  parallelProcess<T>(
    items: T[],
    workerCount: number,
    processFunction: (item: T) => Promise<void>
  ): Promise<void>;
}
