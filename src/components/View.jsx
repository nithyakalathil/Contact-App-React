import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {

    const [data,changedata]=useState(
        []
    )

const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
     
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>{
        return <tr>
        <th scope="row">{value.firstname}</th>
        <td>{value.lastname}</td>
        <td>{value.email}</td>
        <td>{value.mobile}</td>
      
      </tr>
    })}
    
  </tbody>
</table>


        </div>
    </div>
</div>




    </div>
  )
}

export default View