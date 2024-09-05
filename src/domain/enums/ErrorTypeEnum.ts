export const errorType = {
  ValidationError: 'ValidationError',
  ParseError: 'ParseError',
  MissingFieldError: 'MissingFieldError',
  TypeMismatchError: 'TypeMismatchError',
  DuplicateEntryError: 'DuplicateEntryError',
  FormatError: 'FormatError',
  RangeError: 'RangeError',
  UnexpectedValueError: 'UnexpectedValueError',
  PermissionError: 'PermissionError',
  IOError: 'IOError',
  NetworkError: 'NetworkError',
  ConfigurationError: 'ConfigurationError',
  DependencyError: 'DependencyError',
  TimeoutError: 'TimeoutError',
  LogicError: 'LogicError',
  MemoryError: 'MemoryError',
  UnknownError: 'UnknownError',
} as const

export type ErrorTypeEnum = typeof errorType[keyof typeof errorType]
