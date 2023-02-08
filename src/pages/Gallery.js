import React from "react";
import SupportNav from '../components/SupportNav'
import SupportIcon from '../components/SupportIcon'
import SlimFooter from "../components/SlimFooter";

export default function Gallery() {
  return (
    <div className="body">
      <SupportNav />
     <SupportIcon />
      <div class="gallery-page-wrapper">
        <div class="column1">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column2">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column3">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column4">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
      </div>
       <SlimFooter />
    </div>
  );
}
