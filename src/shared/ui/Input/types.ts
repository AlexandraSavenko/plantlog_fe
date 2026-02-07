export interface TextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon?: string;
}

export interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  rows: number;
}

interface OptionObject {
  label: string;
  value: string;
}
export interface SelectInputProps {
  label: string,
  name: string;
  options: OptionObject[];
}