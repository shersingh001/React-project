import React from 'react'


function Sec5box(props){
    return(
        <>
        <div className="sec5data">
       <img src={props.deta} alt="divimg"/>
       <h4>{props.title}</h4>
        </div>

        </>
    )
}

export {Sec5box}