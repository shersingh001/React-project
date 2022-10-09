import React from 'react'
import { Col } from 'react-bootstrap'


function Sec8box(props){
    return(
        <>
<Col>
    <div> <img src={props.img} alt="boximg" /><span>{props.butn}</span> </div>
    <h6>{props.admin}</h6>
    <h6>{props.cmnt}</h6>
    <h3>{props.head}</h3>
    <p>{props.para}</p>

</Col>
        </>
    )
}

export{Sec8box}