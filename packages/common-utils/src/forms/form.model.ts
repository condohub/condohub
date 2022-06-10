import { FormField, FormFieldConfig } from './form-field.model.js';
import { FORM_INPUT_TYPE } from './form-types.js';

/**
 * Type to configure a form
 */
export type FormConfig = {
  fields: Record<string, FormFieldConfig | FormConfig>;
};

/**
 * Form representation
 */
export type Form<TFormConfig extends FormConfig> = {
  /**
   * Controls the display order of forms (for nested forms)
   */
  order?: number;
  /**
   * @example 'contact-form'
   *
   */
  name: string;
  /**
   * The same form fields in map format
   */
  fieldsMap: FormFieldsMap<TFormConfig>;
};

/**
 * Form fields
 */
export type FormFieldsMap<TFormFieldConfig extends FormConfig> = {
  [key in keyof TFormFieldConfig['fields']]: TFormFieldConfig['fields'][key] extends FormFieldConfig
    ? FormField<TFormFieldConfig['fields'][key]>
    : TFormFieldConfig['fields'][key] extends FormConfig
    ? Form<TFormFieldConfig['fields'][key]>
    : undefined;
};

/**
 * Example
 */

type ExampleFormConfig = {
  fields: {
    firstName: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    lastName: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    email: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    startDate: {
      type: FORM_INPUT_TYPE.DATE;
    };
    nested: {
      fields: {
        firstName: {
          type: FORM_INPUT_TYPE.TEXT;
        };
      };
    };
  };
};
