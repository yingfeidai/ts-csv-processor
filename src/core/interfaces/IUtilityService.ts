export interface IUtilityService {
  transformData(data: string[]): string[];
  filterData(data: string[], predicate: (row: string[]) => boolean): string[];
  previewData(data: string[]): string[];
}
