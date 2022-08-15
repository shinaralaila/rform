
import React from "react";
import { useState } from "react";
import axios from"axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function Forminput() {
   const navigate = useNavigate();
  
  // const Tablepage = () => {
  //     navigate("/table")
  // }


//   var [name,setName]=useState('')
//   var [email,setEmail]=useState('')
//   var [phonenumber,setPhonenumber]=useState('')
//   var [hobbies,setHobbies]=useState('')

//   const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
//     setName(event.target.value)
// }
// const emailUpdate=(event)=>{ // Dealing with name field changes to update our state
//   setEmail(event.target.value)
// }
// const phoneUpdate=(event)=>{ // Dealing with name field changes to update our state
//   setPhonenumber(event.target.value)
// }
// const hobbiesUpdate=(event)=>{ // Dealing with name field changes to update our state
//   setHobbies(event.target.value)
// }

const [input, setInput] = useState({
  uname:"",
  email: "",
  phonenumber: "",
  hobbies: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  // console.log(name, value);
  setInput({
      ...input,
      [name]: value
  });
}

 
  
  const {
    register,  //binds component to useform
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  
  
    axios.post('http://localhost:3001/save',data).then(res => { console.log(res); },navigate('/table'));
  } 


//   const postURL = "http://localhost:3001/save" //Our previously set up route in the backend
//   fetch(postURL, {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ // We should keep the fields consistent for managing this data later
//           name: name,
//          email:email,
//          phonenumber:phonenumber,
//          hobbies:hobbies
//       })
//   })
//   .then(()=>{
//       // Once posted, the user will be notified 
//       alert('You have been added to the system!');
//   })
// }





  return (
    
    
        <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Form</h1>
        </div>
        <div className='form-group'>
          <label>Name</label>
          <input onChange={handleChange} name="uname" defaultValue={input.uname} className="form-control"
            placeholder="Enter name"
            {...register("uname", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input onChange={handleChange}  name="email"  defaultValue={input.email}   className="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div classname='form-group'>
          <label>Phone Number</label>
          <input onChange={handleChange}  name="phonenumber" defaultValue={input.phonenumber} className="form-control"
            type="number"
            placeholder="Phone number"
            {...register("phonenumber", {
                required:true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <error>
            {errors.number?.type ==="required" && "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type ===  "maxLength" &&
              "Entered number is more than 12 digits"}
          </error>
        </div> 
        <div className="form-group">
          <label>Hobbies</label>
          <input onChange={handleChange} name="hobbies" defaultValue={input.hobbies}  className="form-control"
            placeholder="Enter hobbies"
            {...register("hobbies", {
              required: true
              
            })}
          />
          <error>
            {errors.hobbies?.type === "required" && "This field is required"}
          </error>
        </div>
        <div>
          <button  >Save</button>    </div> 
          
      </form>
    </div>
    
  )
}