export interface DataProps {
  dateSaved: string;
  data: ValueDataProps[];
}
export interface ValueDataProps {
  fieldId: number;
  value: string | number;
}
export interface FieldsDataProps {
  id: number;
  name: string;
  type: string;
  options: OptionsProps[];
}
export interface OptionsProps {
  name: string;
  value: number;
}
export interface ConfigDataProps {
  id: number;
  formName: string;
  fields: FieldsDataProps[];
}
