import React from "react";

import data from "./task";

const [india]=data;
const {state}=india;
const [MP,WB,KN]=state;
const{city:cityMP}=MP;
const{city:cityWB}=WB;
const{city:cityKN}=KN;
// console.log(MP);
// console.log(WB);
// console.log(KN);
// const{city}=MP;


function createDropDown(d){
 return(
   
        <li><span>{d.name}</span><input type="checkbox"></input> </li>
    
  );
}


function Dropdown(props){
    let givenCity=props.city;
    let givenState=props.state;
  return <div className="forIndia">
   <h2>{givenState} <input type="checkbox"></input></h2>
   <ul id="list">
   {givenCity.map(createDropDown)} 
   </ul>
    </div>
}

export default Dropdown;