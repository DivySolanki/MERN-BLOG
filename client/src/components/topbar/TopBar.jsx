import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'
import "./topbar.css"

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    const PF = "http://localhost:5000/images/"

    return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to='/' className='link' >HOME</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/' className='link' >ABOUT</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/' className='link' >CONTACT</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/write' className='link' >WRITE</Link>
                </li>
                <li className='topListItem' onClick={handleLogout}>
                    {user && 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <Link to="/settings"><img className='topImage' src={PF + user.profilePic} alt="" /></Link>
                ) : (
                    <ul className='topList'>
                        <li className='topListItem' >
                            <Link to='/login' className='link' >LOGIN</Link>
                        </li>
                        <li className='topListItem' >
                            <Link to='/register' className='link' >REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>

  )
}
