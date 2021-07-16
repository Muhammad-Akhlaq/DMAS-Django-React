
import React, { usestate } from "react";
import './Profile.css';



import profile from '../../../images/avatar2.jpg';
import { Typography } from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CustomTimeline,{CustomTimelineSeprator} from '../Loginpages/Timeline';

import { TimelineItem } from '@material-ui/lab';
import { TimelineContent } from '@material-ui/lab';
//import CustomButton from "../Button/Button";
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem=({icon,text,link,title})=>(
<TimelineItem>
    <CustomTimelineSeprator/>
        <TimelineContent className="Timeline-content">
            {link?(<Typography className="Timelineitem-text">
<span>{title}:</span>
<a href={link} target='_blank'>
    {text}
</a>
            </Typography>):(<Typography className="Timelineitem-text">
                <span>{title}:</span>{text}
            </Typography>)}
        </TimelineContent>
    
</TimelineItem>
)


export default class News extends React.Component {
  state = {
    users: null,
    fname: null,
    email: null,
    lname:null,
    loading: true,
  bio:null,
  avatar:null,

    
    
  }
  

  componentDidMount() {
    const username=localStorage.getItem('username')
    this.makeHttpRequestWithPage(username);
  }


  makeHttpRequestWithPage = async username => {
    const response = await fetch(`http://127.0.0.1:8000/myprofile/${username}`);

    const data = await response.json();
console.log(data.user.username);
    this.setState({
      users: data.user.username,
      loading: false ,
      lname: data.user.last_name,
      fname: data.user.first_name,
      email: data.user.email,
      bio: data.profile.bio,
      avatar: data.profile.files,
      
    });
  }
 

  render() {
    
   
    
      const name=this.state.users
      const fname=this.state.fname
      const lname=this.state.lname
      const email=this.state.email
      const bio=this.state.bio

      const avatar=this.state.avatar
    return (
      <div className="profile container-shadow">
      <div className='profile-name'>
          
          <Typography className='name'> My Profile</Typography>
          <Typography className='title'>{name} </Typography>
          

      </div>
      <div className='profile-image'>
          <img src={profile} alt="profile"/>
          
      </div>
      <div className='profile-information'>
          <CustomTimeline icon={<PersonOutlineIcon/>}>
        <CustomTimelineItem title="First-Name"  text={fname} />
        <CustomTimelineItem title="Last Name" text={lname}/>
        <CustomTimelineItem title="UserName" text={name}/>
        <CustomTimelineItem title="Email" text={email}/>
       
          </CustomTimeline >
          
          
          
          
         
      </div>
  </div>
   );
  }}

   {/* <div>
      <div style={{justifyContent:'center',display:'flex',margin:'20px',borderRadius: '50%',
    }}>
     <img  src={avatar} alt="blog-image" />
     
     </div>
     
     <div className='Profile-info'>
     <label className='Profile-label'>Your Info</label>
     <div className='Profile-detail'>
     <div >
        First-Name:
        
        {fname} 
        </div>
  
        <div >
        Last-Name:{lname}</div>
        <div >
        UserName:         {name}</div>
        <div >
        E-mail:{email}</div>
        </div>
        </div>
        <div>
          
        
         
        </div>
      </div>*/} 
   