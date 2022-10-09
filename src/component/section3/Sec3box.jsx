import React from "react";
import { Col } from "react-bootstrap";

function Sec3box(props){
    return(
        <>
<Col md={2}>
<div className="imgdiv"><img src={props.hrimg} alt="horoimg" /></div>
<h4>{props.title}</h4>
<h6>{props.date}</h6>
</Col>
        </>
    )
}

export {Sec3box}