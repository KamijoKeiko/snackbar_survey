import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {CountButton} from "./component/CountButton.tsx";
import {FeedbackSnackbar} from "./component/FeedbackSnackbar";
import {useFeedbackSnackbar} from './component/useFeedbackSnackbar';


export const App = () => {
  const {openSnackbar, snackbarMessage, snackbarSeverity, showSnackbar, closeSnackbar} = useFeedbackSnackbar();
  const [count, setCount] = useState(0)


  const changeCount = (amount: number) => {
    if (count + amount < 0) {
      setCount(0)
      showSnackbar("Count cannot be less than 0", "error")
    } else {
      setCount(count => count + amount)
      showSnackbar(`Count is ${count + amount}`, "success")
    }
  }


  const reset = () => {

    setCount(0)
    showSnackbar(`Count is reset`, "info")
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

      <FeedbackSnackbar open={openSnackbar} onClose={closeSnackbar} snackbarMessage={snackbarMessage}
                        severity={snackbarSeverity} />

    </>
  )
}
