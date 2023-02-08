import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


//Renders Footer component and social media links within footer
export default function Footer() {
  return (
            <div className="footer_container"> 
              <div className="lower_left_footer_container">
                <Link to='/'><div className="primrose_icon_container_bottom"></div></Link>
              <div className="footer_left_text_container">Made with love <br /> in Austin, TX
                    <div className="footer_vertical_line"></div>
                      <div className="footer_email_contact">Contact us at <br />primrosedesserts.com</div>
              </div>
            </div>
    
            <div className="footer_nav">
                  <Link to="/" className="footer_home">HOME</Link>
                    <Link to="/gallery" className="footer_gallery">GALLERY</Link> 
                      <Link to="/about" className="footer_about">ABOUT</Link>      
                  <Link to="/order" className="footer_order">ORDER</Link>
                  <Outlet />
            </div>
            <div className="footer_right_text_and_instagram">
        <div className="footer_right_text">Follow us for exclusive <br />updates and discounts!</div>
         <a href='https://instagram.com/gleauxsweetshop?igshid=YmMyMTA2M2Y='><div className="instagram_icon"><FontAwesomeIcon icon={faInstagram} /></div></a> 
        </div>
  </div>
  );
}

