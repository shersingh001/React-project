import React from "react";
import { Astroimg } from "./Image2";
import { Secdata, Secdata2 } from "./Section2data";


function Section2(){
    return(
        <>
<section id="Astrology">
    <Secdata/>
<div className="width1 flex">
     <Astroimg />
     <Secdata2 />
</div>
</section>
        </>
    )
}

export {Section2}