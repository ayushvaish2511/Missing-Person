import React from 'react';
import Video from '../../assets/video/2.mp4';

const PetLandingPage = () => {

    let DEBUG = false;

    return (
        <div>
            <div>
                 <h1 className='landingPageHeadline'>Find<br/>Missing Person</h1>
                <video className='landingPageVideo' autoPlay loop muted>
                    <source src={Video} type='video/mp4'/>
                </video>
            </div>
        </div>
    );
}
 
export default PetLandingPage;