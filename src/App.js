import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router,Route,Switch,Redirect,Routes} from "react-router-dom"
import Forminput from "./components/Forminput";
import Button from "./components/Button";
import React from "react";
import {useState} from "react"

import {Outlet,Link} from  "react-router-dom"
import button from "./components/Button";
import Tablepage from "./components/Tablepage";
import {useNavigate} from "react-router-dom"


function App() {
 
  




    
      return (
          <Router>
              <Routes>
              <Route path="/" exact element={<Button/>} />
                  <Route path="/table" exact element={<Tablepage/>} />
                  <Route path="/form" element={<Forminput/>} />
              </Routes>
          </Router>
      )
  }
  
  

{/* <div className="App">
     <div className="container">
        
          <Forminput />
          </div>
          <div className="container">
          <Tablepage/>
          </div>
        </div> */}
      
 



//    <>
    

// <Button/>

   
       
 
//      <Router>
//      <Routes>
//     <Route exact path="/" element={<Button/>} /> 
//   <Route path="/form" element={<Forminput/>} />
// <Route path="/table" element={<Tablepage/>} /> 
//           </Routes>
//           </Router>
//           </>
//           );
//   } 
     
    {/* <Route path="/" component={button} />
    <Route path="/form" component={Forminput} /> */}
        
    
     
    //   </Routes>

    // </Router>
    // </> */}
  


export default App;