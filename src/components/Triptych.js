import React from "react";
import { Link } from "react-router-dom"

//Renders the three images near the bottom of the page
export default function Triptych() {
  return (
    <div className="triptych_container">
            
            <Link to='/gallery' className="triptych_cookies_img" alt="cookies">
                <div className="triptych_cookies_text">COOKIES</div>
            </Link>
            
            <Link to='/gallery' className="triptych_pastries_img" alt="pastries">
                <div className="triptych_pastries_text">PASTRIES</div>
            </Link>
            
            <Link to='/gallery' className="triptych_cakes_img" alt="cakes">
                <div className="triptych_cakes_text">CAKES</div>
            </Link>
    </div>
    
  );
}