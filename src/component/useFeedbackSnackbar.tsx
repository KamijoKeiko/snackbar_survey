import {SyntheticEvent, useEffect, useState} from "react";


type UseFeedbackSnackbarReturnType = {
  openSnackbar: boolean,
  snackbarMessage: string,
  snackbarSeverity: 'success' | 'error' | 'info',
  showSnackbar: (message: string, severity: 'success' | 'error' | 'info') => void,
  closeSnackbar: (_event?: Event | SyntheticEvent<Element, Event> | undefined, reason?: string | undefined) => void
}

export const useFeedbackSnackbar = (): UseFeedbackSnackbarReturnType => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error" | "info">("success");


  useEffect(() => {
    // severityが更新されたときにautoHideDurationを設定
    const autoHideDuration = severity === 'error' ? null : 2000;

    // スナックバーが開いているときに新しいautoHideDurationがnullでなければ自動閉鎖を設定
    if (open && autoHideDuration !== null) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, severity]);

  const show = (message: string, severity: 'success' | 'error' | 'info') => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  const close = (_event?: Event | SyntheticEvent<Element, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return {
    openSnackbar: open,
    snackbarMessage: message,
    snackbarSeverity: severity,
    showSnackbar: show,
    closeSnackbar: close
  }
}