import React from 'react'
import './static/App.scss'
import './index.css'
import Menu from './components/Menu';
import LeftMenu from './components/LeftMenu';
import Home from './components/Home';


function App() {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-center">
        <Home />

      </div>
    </>
  )
}

export default App;