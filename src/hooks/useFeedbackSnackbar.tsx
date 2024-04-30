import {SyntheticEvent, useState} from "react";

type UseFeedbackSnackbarReturnType = {
  openSnackbar: boolean,
  snackbarMessage: string,
  snackbarSeverity: 'success' | 'error' | 'info',
  showSnackbar: (message: string, severity: 'success' | 'error' | 'info') => void,
  closeSnackbar: (_event?: Event | SyntheticEvent<Element, Event> | undefined, reason?: string | undefined) => void
}

export const useFeedbackSnackbar = (): UseFeedbackSnackbarReturnType => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error" | "info">("success");

  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info') => {
    setSnackbarMessage(message)
    setSnackbarSeverity(severity)
    setOpenSnackbar(true)
  }

  const closeSnackbar = (_event?: Event | SyntheticEvent<Element, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }
  return {
    openSnackbar,
    snackbarMessage,
    snackbarSeverity,
    showSnackbar,
    closeSnackbar
  }
}