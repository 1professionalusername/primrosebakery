import React from "react";
import { Link } from "react-router-dom";


export default function MiddleText() {
  return (
    <div className="middletext_content_container">
        <div className="middletext_left_container">
            <div className="middletext_left_purple">Make your<br />next event one</div>
                <div className="middletext_left_pink">to remember</div>
        </div>
       
             <div className="middletext_vertical_bar"></div>
            <div className="middletext_right_container">
                 <div className="middletext_right">
                    Primrose desserts are perfect for birthdays, 
                    anniversaries, graduations and more! 
                    Delicious handmade sweets brighten any occasion 
                    and ensure your guests leave happy. 
                    Ready to make an order?
                    <div className="middletext_rb_container">
                    <Link to='/order'><div className="middletext_right_button">GET IN TOUCH</div></Link>
                    </div>
                </div>
                
            
            </div>
     </div>
    );
  }