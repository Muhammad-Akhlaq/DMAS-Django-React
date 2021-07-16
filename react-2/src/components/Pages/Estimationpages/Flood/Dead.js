import React, { useState } from "react";
import { Link,useHistory } from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import "./Dead.css";
import axios from 'axios';
const Dead = () => {
  const [Severity, setSeverity] = useState("");
  const [AffectedArea, setAffectedArea] = useState("");
  //const [Latitude,setLatitude]=useState("");
  const [Magnitude, setMagnitude] = useState("");
  const [CentriodsX, setCentriodsX] = useState("");
  const [CentriodsY, setCentriodsY] = useState("");
  const [users, setusers] = useState("");
  const [loading,setLoading]=useState(false);
  const [errors,setErrors]=useState({});
  const Floodinfo = async () => {
    let formfield = new FormData();
    formfield.append("Severity", Severity);
    formfield.append("Affected Area", AffectedArea);
    formfield.append("Magnitude", Magnitude);
    formfield.append("Centroid X", CentriodsX);
    formfield.append("Centroid Y", CentriodsY);
    setLoading(true);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/floodEstimation/",
      data: formfield,
    }).then((response) => {
      console.log(response.data)
      setusers(response.data)
      DelayReturnToHomePage(response.data);
    });
  }
  const history = useHistory();
 const DelayReturnToHomePage = (e) => {
  
    setTimeout(() => {
       var pageType = {
           pathname: '/DeadResult',
           state: {
             data:e
           }
         }
         history.push(pageType); 
  
  
    }, 1700)
  }

 /* const [amount, setamount] = useState();
  const [amount1, setamount1] = useState();
  const [amount4, setamount4] = useState();
  const [amount2, setamount2] = useState();
  const [amount3, setamount3] = useState();
  const toFixed = 0.0;*/
  if (loading==true) {
    return <div className="loading">Loading
   <BeatLoader/>
   </div>
  }
  const handleChange=async()=>{
    
    let errors = {};
    setErrors(errors);
    if (!Magnitude) {
      errors.Magnitude = 'Magnitude is required';
    }
    if (!Severity) {
      errors.Severity = 'Severity is required';
    }
  
    if (!AffectedArea) {
      errors.AffectedArea = 'Please select Affected Area';
    } 
  if  (!CentriodsX) {
      errors.CentriodsX = 'Please select Centroid-X';
    } 
    if  (!CentriodsY) {
      errors.CentriodsY = 'Please select Centroid-Y';
    } 
  else{
    Floodinfo()
  }
   
    
   
  }
  return (
    <>
      <div className="main">
        <h1 >
         
          Estimate The Damage Due to Flood<br/>and help Disaster Suffering people
         
        </h1>

        <label className="Change">Severity:</label>
        <select
          className="Changing"
          value={Severity}
          name="Severity"
          onChange={(e) => setSeverity ((e.target.value))}
        >
          
          <option  ></option>
          <option  >1</option>
          <option>1.5</option>
          <option>2</option>
        </select>
        {errors.Severity &&<p className='class'>{errors.Severity}</p>}
        <div className="form-inputs-Death">
          <label className="form-label">Affected Area:</label>
          <input
            className="box"
            type="number"
            value={AffectedArea}
            name="AffectedArea"
            onChange={(e) => setAffectedArea(e.target.value)}
           /* value={amount}
            onChange={(event) => setamount(event.target.value)}*/
            placeholder="Enter Affected Area..."
          />
           {errors.AffectedArea &&<p className='class1'>{errors.AffectedArea}</p>}
        </div>

        <div className="form-inputs-Death">
          <label className="form-label">Magnitude:</label>
          <input
            className="box2"
            type="number"
            name="Magnitude"
            value={Magnitude}
            onChange={(e) => setMagnitude(e.target.value)}
           /* value={amount1}
            onChange={(event) => setamount1(event.target.value)}*/
            placeholder="Enter Magnitude..."
          />
          {errors.Magnitude &&<p className='class1'>{errors.Magnitude}</p>}
        </div>

     {/*  <div className="form-inputs-Death">
          <label className="form-label">Latitude:</label>
          <input
            className="box4"
            type="number"
            value={amount2}
            onChange={(event) => setamount2(event.target.value)}
            placeholder="Enter Latitude..."
          />
        </div>*/} 
        <div className="form-inputs-Death">
          <label className="form-label">Centriods X:</label>
          <input
            className="box3"
            type="number"
            name="CentriodsX"
            value={CentriodsX}
            onChange={(e) => setCentriodsX(e.target.value)}
            /*value={amount3}
            onChange={(event) => setamount3(event.target.value)}*/
            placeholder="Enter Centroid X..."
          />
          {errors.CentriodsX &&<p className='class1'>{errors.CentriodsX}</p>}
        </div>
        <div className="form-inputs-Death">
          <label className="form-label">Centriods Y:</label>
          <input
            className="box3"
            type="number"
            name="CentriodsY"
            value={CentriodsY}
            onChange={(e) => setCentriodsY(e.target.value)}
           /* value={amount4}
            onChange={(event) => setamount4(event.target.value)}*/
            placeholder="Enter Centroid Y..."
          />
           {errors.CentriodsY &&<p className='class1'>{errors.CentriodsY}</p>}
        </div>
        
        <button className="DeathButton" onClick={handleChange}> Estimate</button>
        {/*<Link to={`/DeadResult/`} className="stretched-link"> &nbsp;Estimate </Link>*/}
        <br />
        <br />
        <br />
        
      </div>
      {/*   <div className='side-div'>
              <h className='div-1'> Earthquake Awareness</h>
              <h1> Magnitude</h1>
              <h1> Longitude</h1>
              <h1> Latitude</h1>
            </div>*/}
    </>
  );
};
export default Dead;
