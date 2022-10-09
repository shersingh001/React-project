import React from "react";
import { Borderimg, Secimage } from "./Image";
import { Sectiondata } from "./Secdata";

function Section1(){
    return(
        <>
<div className="width display content">
<Sectiondata />
<Secimage />
<Borderimg />
</div>
        </>
    )
}

export {Section1}