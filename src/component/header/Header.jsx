import React from 'react';
import { Container } from 'react-bootstrap';
import { Uldata } from './Headdata';
import { Logo } from './Logo';
import { Navigat } from './Nav';

let detail=(info)=>{
    return(
        <>
            <Navigat menu={info.menu}/>
        </>
    )
}

function Header(){
    return(
        <>
    <header>
        <Container>
  <div className='display navbar'>
    <Logo />
    <ul>
    {Uldata.map(detail)}
    </ul>
</div>
     </Container>
    </header>
        </>
    )
}

export {Header}