import React,{useState} from 'react'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
function ReadmoreDemo(props){
  
    function Readmore({children,maxchractercount=288}){
      const text=children;
      const[isTruncated,setisTruncated]=useState(true);
      const resultString=isTruncated ? text.slice(0, maxchractercount):text;
     function toggleisTruncated(){
       setisTruncated(!isTruncated);
     }
      return (
        <p>
          {resultString}
         <p>
          <button onClick={toggleisTruncated} className="btn post-btn-news" >
          {isTruncated?"Read More " :"Read Less"} &nbsp; <i className="fas fa-arrow-right" />
              </button></p>
        </p>
        
        
      )
    }
  return(
    <div>
      <Readmore>
      {props.val}
     
      </Readmore>
    </div>
  )
}
export default ReadmoreDemo


/*import React,{Component} from 'react';

import styles from './EarthquakeLive.module.css';

import image from '../../../../images/image.jpg';
//import {fetchData} from './CovidApi/Index';

class EarthquakeLive extends React.Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>
            <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} </button>
                {
                    this.state.show? <div><h1>Hide and Show</h1></div> : null
                }
                
            </div>
          </header>
        </div>
      );
    }
  }

export default EarthquakeLive*/