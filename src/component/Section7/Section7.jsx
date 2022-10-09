import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Button } from '../header or pera data/Headpera'
import { Secbox } from './Sec7box'
import { Secdata } from './Sec7data'
import { Header7 } from './Sec7header'

let detail1=(info)=>{
    return(
        <>
            <Secbox img={info.img} icon={info.icon} halficon={info.halficon} title={info.title} price={info.price} delprice={info.delprice} />
        </>
    )
}


function Section7(){
    return(
<>
<section id='Product'>
<Header7 />
<Container>
<Row>
{Secdata.map(detail1)}
</Row>
</Container>
<Button button="Read more"/>
</section>
</>
    )
}

export {Section7}