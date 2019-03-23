import React, {useState, useEffect} from 'react'
import {saveCoktel, getCoktel} from '../../services/firebase'

function CoktailsForm(props) {

    const [coktail, setCoktail] = useState({name:'', licor:'', costo:''})

    useEffect(()=>{
      const {coktailId} = props.match.params
      getCoktel(coktailId)
        .then(r=>{
          setCoktail(r)
        })
    },{})

    function handleChange(e){
        const c = Object.assign({}, coktail)
        c[e.target.name] = e.target.value
        setCoktail(c)     
    }
    function savCoktelFirebase(e){
      e.preventDefault()
      saveCoktel(coktail)
        .then(()=>{
          props.history.push('/coktails')
        })
    }

  return (
    <div>
      <form onSubmit={e=>savCoktelFirebase(e)}>
          <input name="name" onChange={e=>handleChange(e)} value={coktail.name}/>
          <input name="licor" onChange={e=>handleChange(e)} value={coktail.licor}/>
          <input name="costo" onChange={e=>handleChange(e)} value={coktail.costo}/>
          <button type="submit">Send Coktails 🍸🥛🍹</button>
      </form>
    </div>
  )
}

export default CoktailsForm
