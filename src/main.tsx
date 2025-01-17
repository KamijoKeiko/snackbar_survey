import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {New} from "./pages/New.tsx";
import {NextPage} from "./pages/NextPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <App/>
      <Routes>
        <Route path="/" element={<New/>}/>
        <Route path="/next-page" element={<NextPage/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
