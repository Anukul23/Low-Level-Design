import React, { useState } from "react";

const Fullname =()=>{

    const[firstname , SetFirstname] =useState("");
    const[lastname ,setLastname] =useState("");
    const[fullname,setFullname] =useState("");

    const formSubmit = (e)=>{
        
        e.preventDefault();
        setFullname(`Full Name : ${firstname} ${lastname}`)
    }
    return(
        <>
        <h1>Full Name Display</h1>
        <form action="" onSubmit={formSubmit} > 

        <div>
            <label >First Name : </label>
            <input type="text" required onChange={(e)=>{SetFirstname(e.target.value)}} />
        </div>

        <div>
            <label >Last Name : </label>
            <input type="text"   required onChange={(e)=>{setLastname(e.target.value)}}/>
        </div>
  <br/>
        <div>
            <button tyype = "submit">Submit</button>
        </div>

        <h2>{fullname}</h2>
        </form>
        </>
    )
}
export default Fullname;