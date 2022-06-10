import { Form, FormConfig } from '../forms/form.model';

export type APIFormPayload<TFormConfig extends FormConfig> = Form<TFormConfig>;
