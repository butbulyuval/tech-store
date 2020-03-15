import React from 'react';
import Hero from '../components/Hero';
import defaultBCG from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';

export default function DefaultPage() {
    return(
        <>
            <Hero img={defaultBCG} title="404" max="true">
                <h2 classNamw="text-uppercase">page not found</h2>
                <Link to="/" className="main-link" style={{marginTop:"2rem"}}>return home</Link>

            </Hero>
        </>
   )
}
