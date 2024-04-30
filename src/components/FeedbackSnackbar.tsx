import {FC, useEffect} from "react";
import {Snackbar, Alert} from "@mui/material";


type Props = {
  open: boolean,
  onClose: () => void,
  snackbarMessage: string
  severity: 'success' | 'error' | 'info'

}
export const FeedbackSnackbar: FC<Props> = ({
                                              open, onClose, snackbarMessage, severity
                                            }: Props) => {

  useEffect(() => {
    if (open && severity === 'success' || severity === 'info') {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [open, severity, onClose]);


  return <Snackbar open={open}>
    <Alert onClose={onClose} severity={severity} variant="filled">
      {snackbarMessage}
    </Alert>
  </Snackbar>;
}
