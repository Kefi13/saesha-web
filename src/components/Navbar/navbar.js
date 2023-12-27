import React from "react";
import './navbar.css';
import logo from '../../assets/logo.jpg'
import { Link } from "react-scroll";
import About from "../whatsNew /whatsNew";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


 const Navbar = () => {
    return(
       <nav className="navbar">
        <img src={logo} alt="Logo goes here" className="logo"/>
        <div className="navbarMenuItemList">
            
            <Link className="navbarMenuItem" to={About}>Home </Link>
            <Link className="navbarMenuItem" to={About}>What's New  </Link>
            <Link className="navbarMenuItem" to={About}>Closet </Link>
            <Link className="navbarMenuItem" to={About}>Magzine</Link>
            <Link className="navbarMenuItem" to={About}>Xesthetix world</Link>

            
        </div>
        <div className="navbarMenuIcons"  style={{ display: 'flex', gap: '25px',  }}> 
        <PersonOutlineIcon/>
        <ShoppingCartOutlinedIcon/>

        </div>
        

       </nav>
    )
 }

 export default Navbar