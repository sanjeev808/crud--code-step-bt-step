import React, { useState } from 'react'
import { useEffect } from 'react';
export default function AddLeft() {
  const [user, setUser] = useState([])
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
  const [status, setStatus] = useState("")

useEffect (()=>{
  getUser();
})
function getUser()
{
    fetch("http://localhost:3333/users").then((result)=>
    {
      result.json().then((resp)=>{
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setGender(resp[0].gender)
        setStatus(resp[0].status)
// console.log(resp[0].name)        

      })
    })

}
  function getFormData(e) {
    console.log(name, email, gender, status);
  }
  //   let putValues = { name, email, gender, status }
  //   // e.preventDefault();
  //   fetch("http://localhost:3333/users", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(putValues)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log("resp", resp)
  //     })
  //   })
  // }

  // function updateUser()
  // {
  //     console.log(name, email, gender, status)
  // }


  return (
    <div className='formData'>
      <form action="" onSubmit={getFormData}>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" id='name' value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" id='email' value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* <div>
          <label>
            gender:
            <select onChange={(e) => setGender(e.target.value)} value={gender} placeholder="enter your gender">
              <option value="male" placeholder="enter your gender">enter your gender</option>
              <option value="male" >Male</option>
              <option value="Female" >Female</option>
            </select>
          </label>
        </div> */}
        <div>
          <label>
            gender:
            <select onChange={(e) => setStatus(e.target.value)} value={gender} placeholder="enter your gender">
              <option value="status" placeholder="enter your status">enter your status</option>
              <option value="active" >active</option>
              <option value="inactive" >inactive</option>
            </select>
          </label>
        </div>
        <div></div>
        <div>
          <label>
            gender:
            <select onChange={(e) => setStatus(e.target.value)} value={status} placeholder="enter your gender">
              <option value="status" placeholder="enter your status">enter your status</option>
              <option value="active" >active</option>
              <option value="inactive" >inactive</option>
            </select>
          </label>
        </div>
        <div>
       <button >update</button>
        </div>
        
      </form>
    </div>
  )
}
