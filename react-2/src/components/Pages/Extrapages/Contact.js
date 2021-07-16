import React, { useState } from "react";
import "./Contact.css";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors,setErrors]=useState({});

  const contactinfo = async () => {
    let formfield = new FormData();
    formfield.append("name", username);
    formfield.append("email", email);
    formfield.append("subject", subject);
    formfield.append("massage", message);
  
   await axios({
    method: "post",
    url: "http://127.0.0.1:8000/contact/",
    data: formfield,
  }).then((response) => {
    console.log(response.data);
    toast.success('Thank You! your Request has been Submitted',{
      position:"top-center",
      marginTop:'20px'
     })
     setuserName('');
     setEmail('');
     setSubject('');
     setMessage('');
     localStorage.clear();
  });
  
}

  {
    /* constructor()
  {
   super();
   this.state={
    username:"",
    email:"",
    subject:"",
    message:"",
      /* username:"",
       email:"",
       subject:"",
       message:"",
      
       usernameerror:"",
       emailerror:"",
       subjecterror:"",
       messagaerror:"",
      
     
     valid()
      if(!this.state.username.trim("")&&!this.state.email.includes("@")&& !this.state.subject.trim("") && !this.state.message.trim(""))
      {
        this.setState({usernameerror:" username Required",messageerror:"Enter Message" ,emailerror:"Enter valid email adress",subjecterror:"Subject must be Required" })
      }
     else if(!this.state.username.trim("") )
      {
        this.setState({usernameerror:" username Required"})
      }
      else if(!this.state.email.includes("@"))
      {
        this.setState({ emailerror:"Enter valid email adress"  })
       
      }
      else if(!this.state.subject.trim(""))
      {
        this.setState({ passworderror:"Enter Subject"  })
       
      }
     
       
      
      else if( !this.state.message.trim(""))
      {
        this.setState({ password2error:"Enter Message"  })
       
      }
     
      else{
       return true
     }
    
    
    
     /*submit(){
       this.setState({usernameerror:"", emailerror:"",subjecterror:"",messageerror:""  })
     
       
       if(this.valid()){
       alert("Form has been submited")}
     }*/
     const handleChange=async()=>{
      localStorage.clear();
      let errors = {};
      setErrors(errors);
      if (!username) {
        errors.username = 'Username is required';
      }
     
    
      if (!email) {
        errors.email = 'Email is required';
      } 
    if  (!subject) {
        errors.subject = 'Subject is required';
      } 
      if  (!message) {
        errors.message = 'Message is required';
      } 
    else{
      contactinfo()
    }
     
      
     
    }
    return (
      <div className="main-body">
        <h4 className="Header"> HAVE ANY QUERY?</h4>
        <h1 className="Header2"> Contact Us</h1>
        <p className="intro" >
        Feel free to contact us! if you have some concerns over website's content or
you can give us your precious feedback.
        </p>
        <div className="Contact-Div-Location">
          <div className="divlocation">
            <h1 className="contactform-label">
              <MdLocationOn />
              Locate Us
            </h1>
            <p className="div-paragraph">
              {" "}
              UNIVERSITY OF GUJRAT SIALKOT CAMPUS
            </p>
          </div>
          <div className="divlocation">
            <h1 className="contactform-label">
              <FiPhoneCall />
              Give us a Call
            </h1>
            <p className="div-paragraph"> OFFICE: 052-1454678</p>
          </div>
          <div className="divlocation">
            <h1 className="contactform-label">
              <MdEmail />
              Get in Online
            </h1>
            <p className="div-paragraph"> example@gmail.com</p>
          </div>
          <br />
        </div>
        <div className="contact-detail">
          <div className="form-inputs1">
            <label className="form-label1">
              <FaUserAlt />
              UserName*
            </label>
            <input
              className="form-input"
              placeholder=" Enter User Name..."
              type="text"
              name="name"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />
            {errors.username &&<p className='class-error'>{errors.username}</p>}
            <div>
              
            </div>
          </div>
          <div className="form-inputs1">
            <label className="form-label1">
              <MdEmail />
              Email Adress
            </label>
            <input
              className="form-input"
              placeholder=" Enter Your Valid Email..."
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />
{errors.email &&<p className='class-error'>{errors.email}</p>}
           
          </div>
        </div>
        <div className="contact-detail-2">
          <div className="form-inputs2">
            <label className="form-label1">
              <MdEmail />
              Your Subject
            </label>
            <input
              className="form-input"
              type="text"
              placeholder=" Enter Subject..."
              name="name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />

{errors.subject &&<p className='class-error'>{errors.subject}</p>}
          </div>

          <div className="form-inputs2">
            <label className="form-label1">
              <BiMessageRounded />
              Your Message
            </label>
            <input
              className="form-input"
              placeholder=" Enter Your Message..."
              type="text"
              name="name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              /*  onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />
{errors.message &&<p className='class-error'>{errors.message}</p>}
            
          </div>
        </div>
        <button className="contactButton" onClick={handleChange}/* onClick={()=>this.submit()}*/>
          {" "}
          Contact Us
        </button>
        <p className="last">
       
        </p>
        <br />
        <ToastContainer />
      </div>
    );
  }
};
export default Contact;
