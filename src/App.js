import './App.css';
import React from "react";
import {useEffect} from "react";
import data from "./task";
import Dropdown from './dropdown';

const [india]=data;
const {state}=india;
const [MP,WB,KN]=state;
const{city:cityMP}=MP;
const{city:cityWB}=WB;
const{city:cityKN}=KN;
// console.log(MP);
// console.log(WB);
// console.log(KN);




function App() {
  

  
  return (
    <div className="App">
     <h3 ><span id='india'>{india.country}</span> <input type="checkbox" id='india2' ref={india}></input></h3>
     <Dropdown city={cityMP} state="MadhyaPradesh" className="forMP"/>
     <br/>
     <Dropdown city={cityWB} state="West Bengal" />
     <br/>
     <Dropdown city={cityKN}  state="Karnataka"/>


    </div>
  );
}

/* <div className='container'>
 <input type='checkbox' ref='myAwesomeCheckbox' id={'scales'} />
  <label fhtmlForor="scales">Scales</label>
   </div>  */

// checkbox handling


  



   

export default App;
