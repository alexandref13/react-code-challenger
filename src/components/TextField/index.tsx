import { TextField } from "@mui/material";

import { TextFieldProps } from "../../interfaces/components/TextField";

export const TextFieldComponent = ({ key, value, type }: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      key={key}
      id="outlined-basic"
      variant="outlined"
      value={value}
      type={type}
    />
  );
};
