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

const exampleForm: Form<ExampleFormConfig> = {
  name: 'contact-form',
  fieldsMap: {
    firstName: {
      order: 1,
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
    },
    lastName: {
      order: 2,
      name: 'lastname',
      label: 'Last Name',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
    },
    email: {
      order: 3,
      name: 'email',
      label: 'Email',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
    },
    startDate: {
      order: 4,
      name: 'startDate',
      label: 'Start date',
      placeholder: 'Enter start date',
      type: FORM_INPUT_TYPE.DATE,
      defaultValue: new Date('2021-12-12'),
      validations: [
        {
          dateRange: { min: '2021-12-12' },
        },
      ],
    },
    nested: {
      name: 'nested',
      fieldsMap: {
        firstName: {
          order: 1,
          name: 'firstName',
          label: 'First Name',
          placeholder: 'Enter value',
          type: FORM_INPUT_TYPE.TEXT,
        },
      },
    },
  },
};
