import React, {useState, useEffect} from 'react'
import {getCoktel} from '../../services/firebase'
import {Link} from 'react-router-dom'

function CoktailDetail(props) {
    const [coktel, setCoktel] = useState({})

    useEffect(()=>{
        getCoktel(props.match.params.coktailId)
            .then(r=>{
                setCoktel(r)
            })
    })

  return (
    <div>        
        <p>{coktel.name}</p>
        <p>{coktel.licor}</p>
        <p>${coktel.costo}</p>

        <Link to={`/coktails/${coktel.id}/edit`}>Editar</Link>    
    </div>
  )
}

export default CoktailDetail
