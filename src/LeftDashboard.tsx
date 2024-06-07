import React from 'react'
import { Link } from 'react-router-dom'
import Icon from "react-icons-kit";
import { androidFavorite } from 'react-icons-kit/ionicons/androidFavorite'
import { home } from 'react-icons-kit/iconic/home'

export default function LeftDashboard() {
    return (
        <div className='left-dashboard'>
            <div className='left-dashboard-title'>Weather
            </div>
            <div className='sub-route-left'>
                <div className='sub-route-left-flex'>
                    <Link to="/">Home</Link>
                    <Icon icon={home} size={20} />
                </div>
                <div className='sub-route-left-flex'>
                    <Link to="/fav">Favorite</Link>
                    <Icon icon={androidFavorite} size={20} />
                </div>
            </div>
            <div className='footer-left'>
                <img className='footer-left-text-absolute' src="Man.jpg" />
                <button className='footer-left-text'>Log Out</button>
            </div>
        </div>
    )
}
