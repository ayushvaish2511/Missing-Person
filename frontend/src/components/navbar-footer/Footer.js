import React from 'react';

const Footer = (props) => {

    const { transparent } = props;

    let DEBUG = false;

    return (
        <div className={transparent ? 'footerWithPicture' : 'footerWithoutPicture'}>
            <div className='footerText'>
                &copy; {new Date().getFullYear()} 
            </div>
        </div>
    );
}

export default Footer;