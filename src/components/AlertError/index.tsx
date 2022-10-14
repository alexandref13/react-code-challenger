import { Alert, AlertTitle } from "@mui/material";

export const AlertError = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong, <strong>try again!</strong>
    </Alert>
  );
};
