import React from "react";
import astroimg from '../../assets/images/about.jpg'
import playimg from '../../assets/images/play.png'

function Astroimg(){
    return(
        <>
<div className="astroimg halfwidth1 ">
  <img src={astroimg} alt="astroimg" className="astimg"/>
  <img src={playimg} alt="playimg" className="playbtn" />
</div>
        </>
    )
}

export {Astroimg}