export const validationLevel = {
  File: 'file',
  Row: 'row',
  Column: 'column',
} as const

export type ValidationLevelEnum = typeof validationLevel[keyof typeof validationLevel]
