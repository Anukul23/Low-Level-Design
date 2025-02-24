import React, { useEffect, useState } from "react";

const Countrydisplay =()=>{

    const [country ,setCountry] = useState([]);

    useEffect(()=>{

        const fetchCountrydata = async()=>{

            const response = await fetch("https://xcountries-backend.azurewebsites.net/all");

            const jsondata = await response.json();
            
            setCountry(jsondata);
        }
        fetchCountrydata();
    },[])
    return(
       <>
       <h1 style={{color :"blue"}}> Display Country</h1>

       <div style={{display:"flex" ,flexWrap:"wrap" , margin:"10px", padding :"5px",alignItems:"center",justifyContent :"center",border :"1px solid grey" ,borderRadius :"8px"}}>
        {
            country.map((item)=>(
                <div key = {item.abbr} style ={{margin:"15px",padding:"10px" , border :"2px solid blue" , borderRadius :"10px"}}>
                  <img src ={item.flag} alt ="{item.name}" style={{width:"200px", height :"200px"}}/>
                  <h3>{item.name}</h3>  
                </div>
            ))
        }
       </div>


       </>
    )
}
export default Countrydisplay;