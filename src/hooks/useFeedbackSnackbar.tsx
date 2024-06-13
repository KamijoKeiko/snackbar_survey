import {useState} from "react";

type SeverityType = 'success' | 'error' | 'info'

type SnackbarStateType = {
  open: boolean,
  message: string,
  severity: SeverityType
}

export type UseFeedbackSnackbarReturnType = {
  snackbar: SnackbarStateType
  showSnackbar: (message: string, severity: SeverityType) => void,
  closeSnackbar: () => void
}

export const useFeedbackSnackbar = (): UseFeedbackSnackbarReturnType => {
const [snackbar, setSnackbar] = useState<SnackbarStateType>({ open: false, message: "", severity: "success" });
  const showSnackbar = (message: string, severity: SeverityType) => {
   setSnackbar({ open: true, message, severity })
  }

  const closeSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }
  return {
    snackbar,
    showSnackbar,
    closeSnackbar
  }
}