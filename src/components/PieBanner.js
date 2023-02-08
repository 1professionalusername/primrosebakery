import React from "react";
import HomeNav from './HomeNav'
import { Link } from "react-router-dom"
import HomeIcon from './HomeIcon'
//Renders top banner image
export default function PieBanner() {
  return(
      <div className="piebanner_img">
         <HomeNav />
         <HomeIcon />

        <div className="piebanner_text_and_button_container">
            <div className="piebanner_text">
              Handmade sweets, pastries and cakes<br />
              right here in the heart of Texas
            </div>
            <Link to='/order'><div className="piebanner_order_button">ORDER NOW</div></Link>
              
        </div>
      </div>
  )
}