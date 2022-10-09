import React from "react";
import { Container, Row } from "react-bootstrap";
import { Sec3box } from "./Sec3box";
import { Secbox } from "./Sec3data";
import { Headerdata } from "./Sec3headdata";

let detail=(boxs)=>{
    return(
        <>
            <Sec3box hrimg={boxs.hrimg} title={boxs.title} date={boxs.date} />
        </>
    )
}

function Section3(){
    return(
        <>
    <section id="Horoscope">
    <Headerdata />
<Container>
<Row >
{Secbox.map(detail)}
</Row>
</Container>
   </section>

        </>
    )
}

export {Section3}