import { FormControl, MenuItem, Select } from "@mui/material";

import { SelectProps } from "../../interfaces/components/Select";

export const SelectComponent = ({ options, value, key }: SelectProps) => {
  return (
    <FormControl fullWidth key={key}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
