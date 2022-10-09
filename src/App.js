import React from 'react';
import { Header } from './component/header/Header';
import { Section1 } from './component/section1/Section';
import { Section2 } from './component/section2/Section2';
import { Section3 } from './component/section3/Section3';
import { Section4 } from './component/Section4/Section4';
import { Section5 } from './component/Section5/Section5';
import { Section6 } from './component/section6/Section6';
import { Section7 } from './component/Section7/Section7';
import { Section8 } from './component/Section8/Section8';
import { Footersec } from './component/Section9-footer/Footer';

function App(){
    return(
<>
<section id='main'>
<Header />
<Section1/>
</section>
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
<Section8 />
<Footersec />
</>
)
}

export {App};