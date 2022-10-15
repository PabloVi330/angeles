import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [search, setSearch] = useState("")
    const handdleInput = (e) =>{
     setSearch(e.target.value)
    }
    if(search === "gen 16"){
        setSearch("hola soy un  alumno de academlo")
    }
  return (
    <form>
        <h2>Form</h2>
        <input type="text" value={search} onChange={handdleInput} ></input>
        <h3>valort de Search: {search}</h3>
    </form>
  )
}



export default Form