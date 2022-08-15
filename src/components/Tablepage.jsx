
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import App from "../App";
import { useHistory } from "react-router-dom";
import * as emailjs from "emailjs-com";
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from "react-bootstrap";
import {send} from 'emailjs-com'


export default function Tablepage() {

 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const [updatedData, setUpdatedData] = useState({
        uname: "",
        email: "",
        phonenumber: "",
        hobbies:""
      });
    const [tables,setTables]=useState([{
        uname:'',
        email:'',
        phonenumber:'',
        hobbies:''
    }])

    useEffect(()=>{
        fetch('/table').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setTables(jsonRes))
    })

const deleteData=(id)=>{
    console.log(id)

axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };


  const updateData = (uname,email,phonenumber,hobbies) => {
    setUpdatedData((prev) => {
      return {
        ...prev,
        uname: uname,
        email: email,
        phonenumber: phonenumber,
        hobbies:hobbies
      };
    });
    handleShow();
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  
  const saveUpdatedData = () => {
    console.log(updatedData);
    

    axios
      .put(`/update/${updatedData._id}`, updatedData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_erp3h2d', 'template_biue4md',Form.current,  'iQPSqV1_WLM6RLjoQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <table className="table">
      
      <thead>
          <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone number</th>
              <th>Hobbies</th>
          </tr>
      </thead>
      <tbody>
      {
          tables.map((data, index)=>{
              return(
                  <tr key={data._id}>
                      <td><input type="checkbox" onChange={()=>updateData(data.uname,data.email,data.phonenumber,data.hobbies)} checked={data.selected}
                        className="form-check-input"
                        id="rowcheck{data.id}"></input></td>
                        
                      <td>{data.uname}</td>
                      <td>{data.email}</td>
                      <td>{data.phonenumber}</td>
                      <td>{data.hobbies}</td>
                      <td><button >Send Email</button></td>
                      <td><button onClick={()=>updateData(data.uname,data.email,data.phonenumber,data.hobbies)}>Update</button></td>
                      <td><button onClick={()=>deleteData(data._id)}>Delete</button></td>





                      <Modal key={data._id} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={Form}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                name="uname"
                defaultValue={updatedData.uname ? updatedData.uname : ""}
                
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                
                name="email"
            defaultValue={updatedData.email ? updatedData.email : ""}
                
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phonenumber</Form.Label>
              <Form.Control
                type="number"
                placeholder="phonenumber"
                autoFocus

                name="Phonenumber"
                defaultValue={updatedData.phonenumber ? updatedData.phonenumber : ""}
                
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hobbies"
                autoFocus
            
                name="uname"
                defaultValue={updatedData.hobbies ? updatedData.hobbies: ""}
                
                onChange={handleChange}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedData}>
            Save Changes
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Send Email
          </Button>
         
        </Modal.Footer>
      </Modal>
                  </tr>
              )
          })
      }
      </tbody>
  </table>
  
)
}
    
