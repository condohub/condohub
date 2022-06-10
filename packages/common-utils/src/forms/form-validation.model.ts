import { FORM_INPUT_TYPE } from './form-types.js';

/**
 * Depending on the input type we can infer the type of valueType and placeholder
 */
export type FormFieldValueType<Type extends FORM_INPUT_TYPE> = {
  placeholderType: string;
  valueType: Type extends FORM_INPUT_TYPE.DATE ? Date : string;
};

export type FormFieldValidation = {
  /**
   * Takes an array of values and validates that the field value is in this array.
   */
  in?: string[] | number[];
  /**
   * Takes min and/or max parameters and validates the size of the array (number of objects in it).
   */
  size?: { max?: number; min?: number };
  /**
   * Takes min and/or max parameters and validates the range of a value.
   */
  range?: { max?: number; min?: number };
  /**
   * Takes a string that reflects a JS regex and flags, validates against a string. See JS reference for the parameters.
   */
  regexp?: { pattern: string; flags?: string };
  /**
   * Validates that a value falls within a certain range of dates.
   */
  dateRange?: { min?: string; max?: string };
  /**
   * Message to display when validation fails
   */
  message?: string;
  /**
   * Other validations
   */
  [validation: string]: any;
};
