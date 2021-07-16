


import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import axios from "axios";
import './Signup.css';
import { values } from 'lodash';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
 
  textbox:{


width: '100%',
  },
  errormessage:{
color:'red',


  }
}));

export default function SignIn(/*{submitForm}*/) {
  
 
  const [username,setUsername]=useState("");
  const [email,setemail]=useState("");
  const [Password,setPassword]=useState("");
  const [Password2,setPassword2]=useState("");
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [users,setusers]=useState("");
 const [errors,setErrors]=useState({});
 /*const [dataIsCorrect,setdataIsCorrect]=useState(false);*/
 const [fine,setFine]=useState("");
  const signupinfo = async () => {
    let formfield = new FormData();
    formfield.append("fname",firstname);
    formfield.append("lname", lastname);
    formfield.append("username",username );
    formfield.append("email",email );
    formfield.append("pass1", Password);
    formfield.append("pass2", Password2);
   
    //setErrors(validation(values));
  
   await axios({
    method: "post",
    url: "http://127.0.0.1:8000/signup/",
    data: formfield,
  }).then((response) => {
    console.log(response.data);
    setusers(response.data);
    
    if (response.data=="Your Account is successfully created") {
      
      
      localStorage.setItem('password', Password);
      
      localStorage.setItem("username", username);
      
      
      window.location.replace('http://localhost:3000/login');
      console.log("next")
    }
    
   
  });
  }
  const handleChange=async()=>{
    /*setdataIsCorrect(true);*/
    
    setFine("ok")
    let errors = {};
    if (!firstname) {
      errors.firstname = 'First name is required';
    }
    if (!lastname) {
      errors.lastname = 'lastname required';
    }
    if (!username) {
      errors.username = 'Username required';
    }
    else if (username.length < 5   ) {
      errors.username= 'User name must be greater then 5 '; 
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
     //  errors.name = 'Enter a valid name';
    // }
  
    if (!email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!Password) {
      errors.password = 'Password is required';
    } else if (Password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!Password2) {
      errors.password2 = 'Password is required';
    } else if (Password2 !== Password) {
      errors.password2 = 'Passwords does not match';
    }
    else{
      setFine("fine");
    }
    setErrors(errors);
    check(errors);
  }
  const check= (error)=>{
if(fine=="fine"){
  signupinfo();
}
  }
  const classes = useStyles();
 /*useEffect(()=>{
if(Object.keys(errors).length ===  0 && dataIsCorrect){
  submitForm(true);
}
 },[errors])*/
  return (
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Sign UP<br/>
        Please fill this form to Create Account 
      
        
      
        </Typography>
        <div className={classes.textbox} >
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={values.firstname}
            
            onChange={(e) => setfirstname(e.target.value)}
          />
          
          {errors.firstname &&<p className={classes.errormessage}>{errors.firstname}</p>}
          
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
            
          {errors.lastname &&<p className={classes.errormessage}>{errors.lastname}</p>}
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            
          {errors.username &&<p className={classes.errormessage}>{errors.username}</p>}
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email "
            name="email"
           // autoComplete="name"
            //autoFocus
            type="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          
           />
          {errors.email &&<p className={classes.errormessage}>{errors.email}</p>} 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            //autoComplete="current-password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password &&<p className={classes.errormessage}>{errors.password}</p>} 
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label=" Confirm Password"
            type="password"
            id="password2"
            //autoComplete="current-password"
            value={Password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        {errors.password2 &&<p className={classes.errormessage}>{errors.password2}</p>} 
          
        </div>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={handleChange}
            
          >
            Sign Up
          </Button>
          <Grid container>
          
            <Grid item>
              <Link href="/Login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
  }
  {/* Some Extraa work*/}
   {/*  <div className='form-content-right'>
    
    <form  className='form' >
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
        
        />
      
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
         
        />
       
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Confirm Password</label>
        <input
          className='form-input'
          type='password'
          name='password2'
          placeholder='Confirm your password'
         
        />
        
      </div>
    
          <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          onClick=''>
            SIGN-UP  <i class="fa fa-chevron-right"></i>
          </Button>
          </div>
      <span className='form-input-login'>
        Already have an account? Login 
        <Link
                to='/Home'
                className='nav-links'
                
              >
                LOgin
              </Link>
          
         < a href='/Home'>here</a>
      </span>
    </form>
  </div>
//Signup woork

*/}
 
