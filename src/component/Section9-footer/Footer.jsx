import React from 'react'
import { Head2, Pera } from '../header or pera data/Headpera'
import { Logo } from '../header/Logo'
import { Boxs, Boxs2, Boxs3, Boxs4 } from './Footerbox'
import { Data, Data1, Data2, Data3 } from './Footerdata'
import borderimg from '../../assets/images/shape.svg'
import { Container } from 'react-bootstrap'


let detail=(info)=>{
    return(
        <>
<Boxs  pera={info.pera} icon={info.icon} add={info.add}/>
        </>
    )
}


let detail1=(info)=>{
    return(
        <>
<Boxs2 head={info.head} link={info.link}/>
        </>
    )
}

let detail2=(info)=>{
    return(
        <>
<Boxs3 head1={info.head1} horo={info.horo} />
        </>
    )
}

let detail3=(info)=>{
    return(
        <>
        <Boxs4 head2={info.head2} pera={info.pera}/>
        </>
    )
}

function Footersec(){
    return(
<>
<footer id='Footer'>
<div className='head'>
<img src={borderimg} alt="borderimg" />
<Container>
    <Head2 head2="Zodiac Sign Finder" />

<div className='maindiv'>
<div className='firstdiv'>
<Logo />
    {Data.map(detail)}
    </div>
    <div className='secdiv'>
    {Data1.map(detail1)}
    </div>
    <div className='thirddiv'>
    {Data2.map(detail2)}
    </div>
    <div className='fourthdiv'>
    {Data3.map(detail3)}
    </div>
</div>
<div className='copy'>
<Pera pera="Copyright @ 2021 Astrology.All Right Reserved" />
</div>
</Container>
</div>
</footer>
</>
    )
}
export{Footersec}