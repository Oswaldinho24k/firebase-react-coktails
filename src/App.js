import React from 'react'
import Routes from './Routes'
import {Link} from 'react-router-dom'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/coktails">Coktails</Link>
        <Link to="/coktails/new">Add Coktail</Link>
      </nav>
      <Routes/>
    </div>
  )
}

export default App