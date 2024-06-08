import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from "react-icons-kit";
import { androidFavorite } from 'react-icons-kit/ionicons/androidFavorite';
import { home } from 'react-icons-kit/iconic/home';

export default function LeftDashboard() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        //unmounting
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex flex-col justify-between h-full'>
            {!isSmallScreen ? (
                <>
                    <div className='text-4xl left-dashboard-title'>Weather</div>
                    <div>
                        <div className='flex flex-col gap-3 justify-center'>
                            <div className='flex flex-row-reverse justify-center gap-2 sub-route-left-flex'>
                                <Link to="/" className='text-4xl'>Home</Link>
                                <Icon icon={home} size={20} className='my-auto text-3xl' />
                            </div>
                            <div className='flex flex-row-reverse justify-center gap-2 sub-route-left-flex'>
                                <Link to="/fav" className='text-4xl'>Favorite</Link>
                                <Icon icon={androidFavorite} size={20} className='my-auto text-3xl' />
                            </div>
                        </div>
                    </div>
                    <div className={`footer-left ${isSmallScreen ? ' absolute bottom-0 w-full flex justify-around bg-black text-white p-2' : ''}`}>
                        <img className={`${isSmallScreen ? 'hidden' : 'h-[40px] w-[40px]'}`} src="Man.jpg" />
                        <button className={`${isSmallScreen ? 'hidden' : 'footer-left-text'}`}>Log Out</button>
                        {isSmallScreen && (
                            <div className='bg-black flex justify-around w-full'>
                                <Link to="/"><Icon icon={home} size={20} /></Link>
                                <Link to="/fav"><Icon icon={androidFavorite} size={20} /></Link>
                            </div>
                        )}
                    </div>
                </>
            ) : (

                <div className={`footer-left fixed bottom-0 w-full flex justify-around bg-black text-white p-2`}>
                    {/* <img className='' src="Man.jpg" alt="Profile" /> {/* Added alt text for accessibility */}
                    {/*<button className='footer-left-text'>Log Out</button> */}
                    <div className='flex justify-around w-full'>
                        <Link to="/"><Icon icon={home} size={20} /></Link>
                        <Link to="/fav"><Icon icon={androidFavorite} size={20} /></Link>
                    </div>
                </div>
            )}
        </div>)



}
