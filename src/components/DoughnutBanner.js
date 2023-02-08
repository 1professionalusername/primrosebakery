import React from "react";
import { Link } from "react-router-dom"

//Renders copy, button and image for middle sections
export default function DoughnutBanner() {
  return (
    // <div className="doughnut_banner_container">
      <div className="doughnut_banner_img">
        <div className="doughnut_banner_text_and_button_container">
          <div className="doughnut_banner_text">Ready to order? Looking for something custom?</div>
          <Link to='/order'><div className="doughnut_order_button">ORDER NOW</div></Link>
        </div>
      </div>
    // </div>
  );
}