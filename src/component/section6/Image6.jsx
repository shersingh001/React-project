import React from "react";
import img1 from '../../assets/images/c1.jpg'
import img2 from '../../assets/images/c2.jpg'
import img3 from '../../assets/images/c3.jpg'
import img4 from '../../assets/images/c4.jpg'
import img5 from '../../assets/images/c5.jpg'
import img6 from '../../assets/images/c6.jpg'

function Image6(){
    return(
        <>
<div className="div1">
    <img src={img1} alt="custimg" className="img1"/>
    <img src={img2} alt="custimg" className="img2"/>
    <img src={img3} alt="custimg" className="img3"/>
    <img src={img4} alt="custimg" className="img4"/>
    <img src={img5} alt="custimg" className="img5"/>
    <img src={img6} alt="custimg" className="img6"/>
</div>

        </>
    )
}

export {Image6}