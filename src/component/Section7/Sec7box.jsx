import React from 'react'
import Col from 'react-bootstrap/Col'


function Secbox(props){
    return(
        <>
<Col>
<div className='divimg'><img src={props.img} alt="divimg" /></div>
<h4><li>{props.icon}{props.icon}{props.icon}{props.icon}{props.halficon}</li></h4>
<h5>{props.title}</h5>
<h6><li>{props.price}<del>{props.delprice}</del></li></h6>
</Col>

        </>
    )
}

export {Secbox}