import React from 'react'
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router,Route,Switch,Redirect,Routes} from "react-router-dom"


export default function Button() {
  const navigate = useNavigate();
  
  const Forminput = () => {
      navigate("/form")
  }
  return (
    
    <div className='container'>
        {/* <button className="btn btn-success" onClick={Forminput}>Form</button>
         */}
   <button onClick={()=> navigate('/form')} className="button">ADD</button>
    </div>
    
    
  
  )
}
