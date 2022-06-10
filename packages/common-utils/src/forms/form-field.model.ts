import { FORM_INPUT_TYPE } from './form-types.js';
import { FormFieldValidation, FormFieldValueType } from './form-validation.model.js';

/**
 * FormField configuration object
 */
export type FormFieldConfig = {
  name?: string;
  label?: string;
  type?: FORM_INPUT_TYPE;
};

export type FormField<TFormFieldConfig extends FormFieldConfig> = {
  /**
   * Control in what order fields are displayed
   */
  order?: number;
  /**
   * Field name
   */
  name: TFormFieldConfig['name'] extends string ? TFormFieldConfig['name'] : string;
  /**
   * Field display name
   */
  label: TFormFieldConfig['label'] extends string ? TFormFieldConfig['label'] : string;
  /**
   * Type of the input
   */
  type: TFormFieldConfig['type'] extends FORM_INPUT_TYPE
    ? TFormFieldConfig['type']
    : FORM_INPUT_TYPE.TEXT;
  /**
   * Placeholder
   */
  placeholder?: TFormFieldConfig['type'] extends FORM_INPUT_TYPE
    ? FormFieldValueType<TFormFieldConfig['type']>['placeholderType']
    : FormFieldValueType<FORM_INPUT_TYPE.TEXT>['placeholderType'];
  /**
   * Value
   */
  value?: TFormFieldConfig['type'] extends FORM_INPUT_TYPE
    ? FormFieldValueType<TFormFieldConfig['type']>['valueType']
    : FormFieldValueType<FORM_INPUT_TYPE.TEXT>['valueType'];
  /**
   * Default field value
   */
  defaultValue?: TFormFieldConfig['type'] extends FORM_INPUT_TYPE
    ? FormFieldValueType<TFormFieldConfig['type']>['valueType']
    : FormFieldValueType<FORM_INPUT_TYPE.TEXT>['valueType'];
  /**
   * List of validation for the input
   */
  validations?: FormFieldValidation[];
};
