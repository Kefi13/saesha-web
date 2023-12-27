import React from "react";
import './navbar.css';
import logo from '../../assets/logo.jpg'
import { Link } from "react-scroll";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


 const Navbar = () => {
    return(
       <nav className="navbar">
        <img src={logo} alt="Logo goes here" className="logo"/>
        <div className="navbarMenuItemList">
            
            <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem" >Home </Link>
            <Link activeClass="active" to='whatsNew' spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem" >What's New  </Link>
            <Link activeClass="active" to='closet' spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem" >Closet </Link>
            <Link activeClass="active" to='magzine' spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem" >Magzine</Link>
            <Link className="navbarMenuItem" >Xesthetix world</Link>

            
        </div>
        <div className="navbarMenuIcons"  style={{ display: 'flex', gap: '25px',  }}> 
        <PersonOutlineIcon/>
        <ShoppingCartOutlinedIcon/>

        </div>
        

       </nav>
    )
 }

 export default Navbar