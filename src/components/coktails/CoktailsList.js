import React, {useState, useEffect} from 'react'
import {getCokteles} from '../../services/firebase'
import {Link} from 'react-router-dom'

function CoktailsList() {
    const [cokteles, setCokteles] = useState([])

    useEffect(()=>{
        getCoktelesFirebase()
    },[])

    function getCoktelesFirebase(){
        getCokteles()
            .then(res=>{
                setCokteles(res)
            }).catch(e=>console.log(e))
    }

  return (
    <div>
      <h2>Les Coktails</h2>

      {cokteles.map((coktel, key)=>(
          <div key={key}>
              <Link to={`/coktails/${coktel.id}`}>{coktel.name}</Link>
          </div>
      ))}
    </div>
  )
}

export default CoktailsList
