import React from "react";
import { Container, Row } from "react-bootstrap";
import { Button } from "../header or pera data/Headpera";
import { Sec8box } from "./Sec8box";
import { Sec8data } from "./Sec8data";
import { Header8 } from "./Sec8header";


let detail=(info)=>{
    return(
        <>
            <Sec8box img={info.img} butn={info.butn} admin={info.admin} cmnt={info.cmnt} head={info.head} para={info.para}/>
        </>
    )
}


function Section8(){
    return(
        <>
<section id="Section8">
<Header8 />
<Container>
<Row>
    {Sec8data.map(detail)}
</Row>
</Container>
<Button button="View More" />
</section>

        </>
    )
}

export {Section8}