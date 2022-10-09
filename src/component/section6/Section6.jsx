import React from "react"
import { Image6 } from "./Image6";
import { Data6 } from "./Sec6data";
import { Header } from "./Sec6header";

function Section6(){
    return(
        <>
        <section id="Section6">
            <Header />
            <div className="divsec">
            <Image6 />
            <Data6 />
            </div>
        </section>
        </>
    )
}

export {Section6}