import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as PetPawLogo } from '../../assets/icons/dogpaw.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { AppStateContext } from '../../contexts/AppStateContext';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Navbar = (props) => {
  
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    
    const { transparent } = props;
    const [name, setName] = useState('');


    useEffect(() => {
      const Name = localStorage.getItem("name");
     
      
  
     
      setName(Name);
     
     
      console.log(Name)
    }, []);

    let DEBUG = false;

   

    function returnUnprotectedLinks(className) {
        return (
            <>
               
                {/* <li className='navList'><Link className={className} to='/login' onClick={() => setHamburgerOpen(!hamburgerOpen)}>{name?name:"LOGIN/REGISTER"}</Link></li> */}
               
            </>
        )
    }

    function returnProtectedLinks(className, buttonClassName) {
        return (
            <>
            <a href='https://face-reco-1.herokuapp.com/'>
            <li><Link className={className}   onClick={() => setHamburgerOpen(!hamburgerOpen)}>Find Person</Link></li>

            </a>
                <li><Link className={className} to='/reportperson' onClick={() => setHamburgerOpen(!hamburgerOpen)}>Report Person</Link></li>
                <li className='navList'><Link className={className} to='/register' onClick={() => setHamburgerOpen(!hamburgerOpen)}>{name?name:"LOGIN/REGISTER"}</Link></li>     
            </>
        )
    }

    function isNavbarOpen(isOpen, setNavDesktop, setNavMobile, navStyle, logOutStyle) {
        if (isOpen) {
            return (
                <>
                    <ul className='navMainList' style={{display: 'none'}}>
                        {setNavDesktop(navStyle, logOutStyle)}
                    </ul>
                    <ul className='navMainListMobile' style={{display: 'flex'}}>
                        {setNavMobile(navStyle, logOutStyle)}
                    </ul>
                </>
            )
        } 
        else {
            return (
                <>
                    <ul className='navMainList' style={{display: 'flex'}}>
                        {setNavDesktop(navStyle, logOutStyle)}
                    </ul>
                    <ul className='navMainListMobile' style={{display: 'none'}}>
                        {setNavMobile(navStyle, logOutStyle)}
                    </ul>
                </>
            )
        }
    }

    if (DEBUG) console.log('hamburgerOpen', hamburgerOpen);

    return (  
        <div>
            <div className={transparent ? 'navigationWithoutPicture' : 'navigationWithPicture'}>
                {
                    <>
                        <Link className='navLogo' to='/' onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                            <PetPawLogo className='navLogoInner'/>
                        </Link>
                            {isNavbarOpen(hamburgerOpen, 
                                () => returnUnprotectedLinks('navLinkDesktop', 'logOutButtonDesktop'),
                                () => returnUnprotectedLinks('navLinkMobile', 'logOutButtonMobile')
                            )}
                   
                        <div className='navPositionLeft'>
                            <Link className='navLogo' to='/lostandfound' onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                                <PetPawLogo className='navLogoInner'/>
                            </Link>
                           
                        </div>
                            {isNavbarOpen(hamburgerOpen, 
                                () => returnProtectedLinks('navLinkDesktop', 'logOutButtonDesktop'),
                                () => returnProtectedLinks('navLinkMobile', 'logOutButtonMobile')
                            )}
                    </>
                }
                <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                    <Hamburger hamburgerOpen={hamburgerOpen}/>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;