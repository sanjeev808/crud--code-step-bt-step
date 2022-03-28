import React, { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import axios from "axios";

export default function Addright() {
  const [data,setData] = useState([])
useEffect(()=>{
  userList();
},[])

function userList(){
  fetch("http://localhost:3333/users").then((result)=>{
    result.json().then((resp) =>{
  setData(resp)
    })
    })
}
async function deleteUser(id) {
    console.log(id)
    await axios.delete(`http://localhost:3333/users/${id}`).then(() =>{
    // console.log(`http://localhost:3333/users${id}`);   
    console.log("data deleted")
      userList()
      })
    // })
  }
  

  return (
    <div className="tableData">
      <table boder="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>action</th>

        </tr>
        {/* <tbody>{data1}</tbody> */}
      {
        data.map((item)=>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.status}</td>
          <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
          <td><button><updateUser/>upadate</button></td>

        </tr>)

 }
      </table>
    </div>
  );
}
