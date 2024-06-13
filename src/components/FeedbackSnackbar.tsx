import {useEffect} from "react";
import {Snackbar, Alert} from "@mui/material";
import {UseFeedbackSnackbarReturnType} from "../hooks/useFeedbackSnackbar.tsx";


export const FeedbackSnackbar = ({snackbar, closeSnackbar}: UseFeedbackSnackbarReturnType) => {


  useEffect(() => {
    if (snackbar.open && snackbar.severity === 'success' || snackbar.severity === 'info') {
      const timer = setTimeout(() => {
        closeSnackbar();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [snackbar.open, snackbar.severity, closeSnackbar]);


  return <Snackbar open={snackbar.open}>
    <Alert onClose={closeSnackbar} severity={snackbar.severity} variant="filled">
      {snackbar.message}
    </Alert>
  </Snackbar>;
}
