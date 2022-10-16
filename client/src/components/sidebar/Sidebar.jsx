import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./sidebar.css"
import { Link } from "react-router-dom"

export default function Sidebar() {
    const [cats, setCats] = useState([]);


    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])


    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle' >ABOUT ME</span>
                <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102416.jpg&fm=jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deserunt numquam, debitis, pariatur repellendus placeat, cupiditate nemo non itaque voluptatum neque! Sed pariatur quia aut dolore? Numquam commodi quis nisi!</p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle' >CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
