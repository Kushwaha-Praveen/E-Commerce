import React from 'react'
import logo from "../../images/ShopHub-logos_black.png"
import '../../css/Navbar.css'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { VscChromeClose,VscThreeBars } from "react-icons/vsc";
// import {FavoriteBorderIcon} from '@mui/icons-material/FavoriteBorder';
const Navbar = () => {
  return (
    <>


<header>
  <div class="container_nav">
    <div class="logo-box">
    <NavLink to = "/">
        <img src={logo} />
    </NavLink>
    </div>
    <nav>
    <ul>
    <li><NavLink to = "/" className="nav_">Home</NavLink></li>
     
      <li><NavLink to = "/Product" className="nav_">Products</NavLink></li>
      <li><NavLink to = "/Contact" className="nav_">Contact Us</NavLink></li>
      <li><NavLink to = "/Login" className="nav_ nav_login">Login</NavLink></li>
      {/* <li><NavLink to = "/Like" className="nav_"><AiOutlineHeart/></NavLink></li>
      <li><NavLink to = "/Cart" className="nav_ trolley"><BsCart3/></NavLink></li> */}
   </ul>
  </nav>
  </div>
</header>
</>
  )
}

export default Navbar;







 
          