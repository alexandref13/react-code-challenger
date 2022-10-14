export interface OptionsProps {
  name: string;
  value: number;
}
export interface SelectProps {
  options: OptionsProps[];
  value: string | number;
  key: string | number;
}