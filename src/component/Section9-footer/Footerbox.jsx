import React from 'react'


function Boxs(props){
    return(
        <>
  <p>{props.pera}</p>
  <li>{props.icon}</li><li>{props.add}</li>

        </>
    )
}


/*   Quick link   */

function Boxs2(props){
    return(
        <>
    <h3>{props.head}</h3>
    <li>{props.link}</li>
        </>
    )
}

/*  Horoscope  */

function Boxs3(props){
    return(
        <>
<h3>{props.head1}</h3>
<li>{props.horo}</li>
</>
    )
}


/* Our newsletter   */

function Boxs4(props){
    return(
        <>
        <h3>{props.head2}</h3>
        <p>{props.pera}</p>
        </>
    )
}


export{Boxs,Boxs2,Boxs3,Boxs4}

