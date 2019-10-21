import React from 'react';

const LandingPage = (props) => {

    const cta = (e) => {
        e.preventDefault();
        props.history.push('/register')
    }

    return(
        <div className="page">
            <div className="overlay"></div>
                <div className="container">
                    <h3 className="title">Geograpics</h3>
                    <h1 className="tagline"><span className="snap">Snap It.</span> <span className="post">Post It.</span> <span className="map">Map It.</span></h1>
                    {/* <h1 className="tagline">Your Destinations.<br/>Your Posts.<br/> Your Map.</h1> */}
                    <ul className="tagline-details">
                        <li className="tagline-bullet">Seamlessly connect to Instagram.</li>
                        <li className="tagline-bullet">Share your map with friends and family.</li>
                        <li className="tagline-bullet">Filter your photos to see memorable events.</li>
                    </ul>
                    <h3 className="cta">What does <strong>your</strong> map look like?</h3>
                    <button className="cta-button" onClick={cta}>Try It Now</button>
                </div>
            
        </div>
    )
}

export default LandingPage;