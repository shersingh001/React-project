import React from 'react'
import { Sec5box } from './Sec5box'
import { Sec5data } from './Sec5data'
import topimg from '../../assets/images/shape.svg'
import { Header } from './Sec5headerdata'

let detail=(info)=>{
    return(
        <>
            <Sec5box deta={info.deta} title={info.title}/>
        </>
    )
}


function Section5(){
    return(
        <>
  <section id='Section5'>
  <img src={topimg} alt="borderimg" className='topimg' />
    <Header/>
  <div className='main'>
      {Sec5data.map(detail)}
  </div>
  <img src={topimg} alt="borderimg" className='topimg2' />
  </section>

        </>
    )
}

export {Section5}