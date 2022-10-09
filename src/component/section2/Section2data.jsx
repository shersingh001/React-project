/*Section 2 Header data  */

import React from 'react'
import { Button, Head2, Pera } from '../header or pera data/Headpera'
import smallimg from '../../assets/images/about.svg'


function Secdata(){
    return(
        <>
<div className="sec2data">
        <Head2 head2="About Astrology"/>
        <Pera pera="It is long eastiblished fact that a render will be distrecated by the readable content of a page when looking at its layout. the point of using lorem ipsum"/>
</div>
        </>
    )
}


/* section 2 div data  */

function Secdata2(){
    return(
        <>
<div className="halfwidth2">
<Head2 head2="What do we do?" />
<Pera pera="There are many variention of passages of lorem ipsum available, but the majority have suffered alteration in some form,by injected numour, or randomised words." />
<Pera pera="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />
<div className="secmini">
    <span><img src={smallimg} alt="smallimg" /> </span>
    <ul>
        <li className="firstli">30</li>
        <li className="secli"><h6>Years of</h6><h3>Experience</h3></li>
    </ul>
</div>
<span> <Button button="Read more"/> </span>
</div>

        </>
    )
}

export{Secdata,Secdata2}