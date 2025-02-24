import React, { useEffect, useState } from "react";

const Statedisplay =()=>{

    const[countries ,setCounties] = useState([]);
    const [states , setStates] = useState([]);
    const [city , setCity] = useState([]);
    const[selectcountry ,setSelectcountry] = useState("");
    const [selectstates , setSelectstates] = useState("");
    const[selectcitiy , Setselectcity] =useState("");
    
    useEffect(()=>{

        const fetchcountry = async()=>{
            try{
                
                const response = await fetch("https://crio-location-selector.onrender.com/countries");
                const data =  await response.json();
                console.log(data);
                setCounties(data);
            }
            catch(error){
                return "Error fetching country data"
            }
        }
        fetchcountry();
    },[])

    useEffect(()=>{

       if(selectcountry){
        const fetchstates =async()=>{
            try{
            const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectcountry}/states`)
            const data = await response.json();
            setStates(data);
            setSelectstates("");
            setCity([]);
            Setselectcity("")
            }
            catch(error){
                return "state data is not fetcthing"
            }
        }
        fetchstates();
       }
    },[selectcountry])

    useEffect(()=>{

        const fetchcity =async()=>{
            try{
             
                const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectcountry}/state=${selectstates}/cities`);
                const data = await response.json();
                setCity(data);
                Setselectcity("");
            }
            catch(error){
                return "error for city data "
            }
        }
        fetchcity();
    },[selectcountry,selectstates])

    return(
<>
<div>
<h1>Select Location</h1>
<div>
    <select value={selectcountry} name={selectcountry} onChange={(e)=>setSelectcountry(e.target.value)} >
        <option  >
            Selectcounty
        </option>
        {
            countries.map((country ,idx)=>(
                <option key={idx} value={country}>
                  {country}
                </option>
            ))
        }
    </select>

    <select name={selectstates} value ={selectstates} onChange={(e)=>{setSelectstates(e.target.value)}} disabled= {!selectcountry}>
        <option >
            Selectstates
        </option>
        {
            states.map((state ,idx)=>(
                <option key ={idx} value ={state}>
                  {state}
                </option>
            ))
        }
    </select>

    <select name={selectcitiy} value ={selectcitiy} onChange= {(e)=>{Setselectcity(e.target.value)}} disabled={!selectcountry&&!selectstates}>
        <option >
            Selectcity
        </option>
        {
            city.map((city ,idx)=>(
                <option key ={idx} value={city}>
                 {city}
                </option>
            ))
        }
    </select>
</div>
</div>

</>
    )
}
export default Statedisplay;