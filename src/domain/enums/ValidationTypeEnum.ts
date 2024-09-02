export const validationType = {
  FileValidation: 'FileValidation',
  RowValidation: 'RowValidation',
  ColumnValidation: 'ColumnValidation',
} as const

export type ValidationTypeEnum = typeof validationType[keyof typeof validationType]
