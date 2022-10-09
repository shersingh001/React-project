import React from "react";
import { Image4 } from "./Image4";
import { Data, Divbox } from "./Sec4data";
import { Sec4prop } from "./Sec4prop";

let detail=(info)=>{
    return(
        <>
            <Sec4prop box={info.box} name={info.name} pera={info.pera} li={info.li} icon={info.icon} />
        </>
    )
}

function Section4(){
    return(
        <>
<section id="Service">
    <Data />
    <div className="maindiv">
    <Image4 />
    <div className="halfdiv2">
    {Divbox.map(detail)}
    </div>
    </div>
</section>
        </>
    )
}

export {Section4}