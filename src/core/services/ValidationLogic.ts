import {
  IValidationLogicService,
} from '../interfaces/IValidationLogicService'

export class ValidationLogic implements IValidationLogicService {
  // File size validation (separate from file name validation)
  validateFile(size: number): boolean {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // Maximum allowed file size (10MB)

    if (size > MAX_FILE_SIZE) {
      throw new Error(`File size exceeds the limit. Maximum allowed size is ${MAX_FILE_SIZE / (1024 * 1024)} MB`);
    }

    return true; // Validation passed
  }

  // File name validation (with fileNamePattern passed as a parameter)
  validateName(file: string, fileNamePattern: RegExp): boolean {
    if (!fileNamePattern.test(file)) {
      throw new Error('Invalid file name format.');
    }

    return true; // Validation passed
  }

  // CSV header validation with required and optional headers
  validateHeader(headers: string[], requiredHeaders: string[], optionalHeaders: string[] = []): boolean {
    const missingRequired = requiredHeaders.filter(req => !headers.includes(req));
    const unexpectedHeaders = headers.filter(header => ![...requiredHeaders, ...optionalHeaders].includes(header));

    if (missingRequired.length > 0) {
      throw new Error(`Missing required headers: ${missingRequired.join(', ')}`);
    }

    if (unexpectedHeaders.length > 0) {
      throw new Error(`Unexpected headers found: ${unexpectedHeaders.join(', ')}`);
    }

    return true; // Validation passed
  }

  // Row validation logic
  validateRow(row: string[]): boolean {
    // Check if the row contains any empty or blank columns
    if (row.some(column => column.trim() === '')) {
      throw new Error('CSV row contains empty or blank columns');
    }

    return true; // Validation passed
  }

  // Individual column validation, can be extended as needed
  validateColumn(column: string[]): boolean {
    // Assuming we want to ensure that each column value is not empty
    return column.every(value => value.trim() !== '');
  }
}
