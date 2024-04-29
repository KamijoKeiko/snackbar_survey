import {FC, SyntheticEvent} from "react";
import {Snackbar, Alert} from "@mui/material";


type Props = {
  open: boolean,
  onClose: (_event: (SyntheticEvent | Event), reason?: string) => void,
  snackbarMessage: string
  severity: 'success' | 'error' | 'info'

}
export const FeedbackSnackbar:FC<Props> = ({
  open, onClose,snackbarMessage, severity
}:Props) => {
  return <Snackbar open={open} autoHideDuration={500} onClose={onClose}>
    <Alert onClose={onClose} severity={severity} variant="filled">
      {snackbarMessage}
    </Alert>
  </Snackbar>;
}
