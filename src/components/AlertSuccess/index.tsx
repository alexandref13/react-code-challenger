import { Alert, AlertTitle } from "@mui/material";
import { AlertSuccessProps } from "../../interfaces/components/AlertSuccess";

export const AlertSuccess = ({ onClose }: AlertSuccessProps) => {
  return (
    <Alert onClose={onClose} severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  );
};
