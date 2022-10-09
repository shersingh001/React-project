import React from "react";


function Sec4prop(props){
    return(
        <>
        <div className='fourdata'>  <img src={props.box} alt="kundali"/> 
        <h4>{props.name}</h4>
        <p>{props.pera}</p>
        <ul><a href="www.com"><li>{props.li}{props.icon}</li></a></ul>
        </div>
        </>
    )
}

export {Sec4prop}