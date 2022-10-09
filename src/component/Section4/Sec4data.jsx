/* function for section 4 header or pera data */

import React from 'react'
import { Head2, Pera } from '../header or pera data/Headpera'
import divimg1 from '../../assets/images/open-book-svgrepo-com.svg'
import divimg2 from '../../assets/images/man-svgrepo-com.svg'
import divimg3 from '../../assets/images/astrology-horoscope-svgrepo-com (1).svg'
import divimg4 from '../../assets/images/meeting-svgrepo-com.svg'
import { BsArrowRightShort } from "react-icons/bs";


function Data(){
    return(
        <>
        <div className="data">
         <Head2 head2="Our Services" />
         <Pera pera="Consectetur adipiscing, sed do eiusmod tempor incididuesdeentitut labore"/>
         <Pera pera="etesde dolore magna aliquapspendisse and the gravida." />
         </div>
        </>
    )
}


/*  function for section 4 div data  */

let Divbox=[
{
box:divimg1,
name:"Kundli dosha",
pera:"Lorem ipsum dollor sit, amet constuecer",
li:"Read more",
icon:<BsArrowRightShort/>,
},
{
box:divimg2,
name:"Kundli dosha",
pera:"Lorem ipsum dollor sit, amet constuecer",
li:"Read more",
icon:<BsArrowRightShort/>,
},
{
box:divimg3,
name:"Kundli dosha",
pera:"Lorem ipsum dollor sit, amet constuecer",
li:"Read more",
icon:<BsArrowRightShort/>,
},
{
box:divimg4,
name:"Kundli dosha",
pera:"Lorem ipsum dollor sit, amet constuecer",
li:"Read more",
icon:<BsArrowRightShort/>,
},

]

export {Divbox,Data}