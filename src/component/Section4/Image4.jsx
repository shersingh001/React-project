import React from "react";
import image from '../../assets/images/service_img1.jpg'
import image1 from '../../assets/images/service_img2.png'
import image2 from '../../assets/images/choose.svg'

function Image4(){
    return(
<>
<div className="halfdiv1">
<img src={image1} alt="backimg" className="backimg"/>
<img src={image} alt="sideimg" className="sideimg"/>
<img src={image2} alt="design img" className="designimg" />
</div>
</>
    )
}

export {Image4}