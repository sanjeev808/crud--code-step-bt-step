import React, { useState } from 'react'

export default function AddLeft() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")
  


  function getFormData(e) {
    console.log(name, email, gender, status);
    let putValues = { name, email, gender, status }
    e.preventDefault();
    fetch("http://localhost:3333/users", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(putValues)
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp)
        
      })
    })
  }
 function handler(e){
   e.preventDefault();
 }

  return (
    <div className='formData'>
      <form action="" onSubmit={getFormData}>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" id='name' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" id='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>
            gender:
            <select onChange={(e) => setGender(e.target.value)} placeholder="enter your gender">
              <option value="male" placeholder="enter your gender">enter your gender</option>
              <option value="male" >Male</option>
              <option value="Female" >Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            gender:
            <select onChange={(e) => setStatus(e.target.value)} placeholder="enter your gender">
              <option value="status" placeholder="enter your status">enter your status</option>
              <option value="active" >active</option>
              <option value="inactive" >inactive</option>
            </select>
          </label>
        </div>
        <div>
          <input type="submit" onClick={(e)=>handler(e)} />
        </div>
        
      </form>
    </div>
  )
}
