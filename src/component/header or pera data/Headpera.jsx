//*this function for Heading H1
import React from "react";

function Head1(props){
    return(
        <>
            <h1>{props.head1}</h1>
        </>
    )
}

//*this function for heading h2



function Head2(props){
    return(
        <>
   <h2 className="after">{props.head2}</h2>
        </>
    )
}



//*this function for peragraph


function Pera(props){
    return(
        <>
<p>{props.pera}</p>
        </>
    )
}

//*this function is for buttons

function Button(props){
    return(
        <>
    <div className="buttons"><a href="www.com">{props.button}</a></div>
        </>
    )
}


export {Head1, Head2 ,Pera,Button}
