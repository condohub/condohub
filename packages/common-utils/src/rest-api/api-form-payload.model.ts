import { Form, FormConfig } from '../forms/form.model.js';

export type APIFormPayload<TFormConfig extends FormConfig> = Form<TFormConfig>;
