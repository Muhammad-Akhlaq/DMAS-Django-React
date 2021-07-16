
//MATERIAL UI LOGIN
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
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useRafState } from 'react-use';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
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
  errormessage:{
    color:'red',
    
    
      },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [username,setUsername]=useState(localStorage.getItem('username'));
  const [Password,setPassword]=useState(localStorage.getItem('password'));
  const [users,setusers]=useState("");
  const [errors,setErrors]=useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('Token') !== null) {
      window.location.replace('http://localhost:3000/Awareness');
    } else {
      setLoading(false);
      
    }
  }, []);
  const Logininfo = async () => {
    let formfield = new FormData();
    
    formfield.append("username",username );
    formfield.append("pass", Password);
    
  
   await axios({
    method: "post",
    url: "http://127.0.0.1:8000/login/",
    data: formfield,
  }).then((response) => {
    console.log(response.data);
    setusers(response.data);
   
    if (response.data.Token) {
      
      localStorage.setItem('token', response.data.Token);
      
      localStorage.setItem("username",response.data.username);
      window.location.replace('http://localhost:3000/Awareness');
     toast.success('Successfuly Login!',{
      position:"top-center",
      marginTop:'20px'
     })
      console.log("next")
    } else {
      toast.error('Invalid Credentials Please Try again!',{
        position:"top-center",
        marginTop:'20px'
       })
      setUsername('');
      setPassword('');
      localStorage.clear();
      setErrors(true);
    }

    
    
  });
  }
  
  const handleChange=async()=>{
    
    let errors = {};
    setErrors(errors);
    if (!username) {
      errors.username = 'Username required';
    }
   
  
    if (!Password) {
      errors.Password = 'Password is required';
    } 
  else{
    Logininfo()
  }
   
    
   
  }
 
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        
       Welcome back!<br/> Help out the Pendamic suffering people.
        
      
        </Typography>
     <div className={classes.form} onSubmit={Logininfo}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name" 
            name="name"
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
            name="password"
            label="Password"
            type="password"
            id="password"
            //autoComplete="current-password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
           {errors.Password &&<p className={classes.errormessage}>{errors.Password}</p>}
          
         
          
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={handleChange}
            alert={users}
          >
            Log In
          </Button>
          
          <Grid container>
           
            <Grid item>
              <Link href="/Sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </div>
      </div>
      <Box mt={8}>
        
      </Box>
      <ToastContainer />
    </Container>
     
  );
  }
 

/*import React, { Component } from 'react'
import './Login.css';
import {Button }from '../../../Button/Button';
import { Link } from 'react-router-dom';
import {  FaUserAlt,FaKey} from 'react-icons/fa';

class Login extends React.Component  {
  constructor()
  {
   super();
   this.state={
       email:"",     
       password:"",
       usernameerror:"",
       passworderror:"",
       Credentials:{
         username:'',
         password:''
       }
    
     }}
    valid(){
      if(!this.state.email.trim("") && !this.state.password.trim("")){
        this.setState({usernameerror:"UserName is required",passworderror:"Password is required"})
      }
      else if(!this.state.email.trim(""))
      {
       this.setState({usernameerror:"username Required"})
      }
      else if(!this.state.password.trim(""))
      {
       this.setState({passworderror:"Password Required"})
      }
      else{
        return true;
      }
    }
     
     
      submit(){
        this.setState({usernameerror:"", passworderror:"" })
      
        if(this.valid()){
         alert('submitted')
        }
        }
     render(){
  return (
    <>
    <div className='login-container'>
   <div className='form-content-right'>
     
 
  <h1 className= 'heading-h1'>
         Welcome back!<br/> Help out the Pendamic suffering people.
        
      </h1>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'>  <FaUserAlt/>Username</label>
        <input
          className='form-input'
          type='text'
          name='text'
          placeholder='Enter your username'
          onChange={(event)=>{this.setState({email:event.target.value})}}/>
         
          <p>{this.state.usernameerror}</p>
        
        
      
      </div>
       
      <div
       className='form-inputs'>
       <label className='form-label'> <FaKey/>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
         
         onChange={(event)=>{this.setState({password:event.target.value})}}/>
         
         <p>{this.state.passworderror}</p>
      
      

      </div>
      
      < a className='password-forget' href='/'>Forgot Your Password?<br/></a>
      
            <button className='LoginButton' onClick={this.login}>Login</button>
          
     

            </div>
          <br/>
          <div className='span-login'>
        Don't have an account? Signup < a href='/sign-up'>here</a>
        <br/><br/>
        
      </div>


    
  </div>
  </div>
  
  </>
  );
}}
export default Login*/
//GOOD LOGIN AND SIGNUP PAGE THAT WORKING A BIT SLOW  
/*import React, { Component} from 'react';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
        this.props.userLogin(data);
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    fetch('http://127.0.0.1:8000/signup/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div>
        <h1>Login user form</h1>

        <label>
          Username:
          <input type="text" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Login;*/
