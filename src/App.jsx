import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import MenuData from './data/MenuData'


function App() {
  

  return (
    <div >
      <Router>
        <Navigation/>
        <Routes>
          {MenuData.map((res,i)=>{
            return <Route key={i} path={res.path} element={res.pageComponent}/>
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
