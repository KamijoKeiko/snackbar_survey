import {SyntheticEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {CountButton} from "./component/CountButton.tsx";
import {FeedbackSnackbar} from "./component/FeedbackSnackbar";


export const App = () => {
  const [count, setCount] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error" | "info">("success")

  const changeCount = (amount: number) => {
    if (count + amount < 0) return

    setCount(count => count + amount)
    setSnackbarMessage(`Count is ${count + amount}`)
    setSnackbarSeverity(amount > 0 ? "success" : "error")
    setOpenSnackbar(true)
  }


  const reset = () => {

    setCount(0)
    setSnackbarMessage(`Count is reset`)
    setSnackbarSeverity("info")
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButton variant="text">
          {count}
        </CountButton>
        <CountButton onClick={() => changeCount(1)}><AddIcon/></CountButton>

        <CountButton onClick={reset} variant="outlined">reset</CountButton>
        <CountButton onClick={() => changeCount(-1)}><RemoveIcon/></CountButton>
      </div>

      <FeedbackSnackbar open={openSnackbar} onClose={handleCloseSnackbar} snackbarMessage={snackbarMessage} severity={snackbarSeverity}/>

    </>
  )
}
