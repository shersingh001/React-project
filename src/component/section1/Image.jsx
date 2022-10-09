import React from "react";
import image from '../../assets/images/hand_bg.png'
import image2 from '../../assets/images/hand.png'
import Bordimg from '../../assets/images/shape.svg'

function Secimage(){
    return(
        <>
<div className="halfwidth">
<img src={image} alt="secimg" className="img1"/>
<img src={image2} alt="secimg" className="img2"/>
</div>
        </>
    )
}

export {Secimage}

function Borderimg(){
    return(
        <>
<img src={Bordimg} alt="borderimg" className="borderimg"/>
        </>
    )
}

export{Borderimg}