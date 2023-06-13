import React from 'react';
import SupportNav from "../components/SupportNav";
import SupportIcon from '../components/SupportIcon'
import SlimFooter from '../components/SlimFooter';


export default function About() {
  return (
    <div className="body">
      <SupportNav />
      <SupportIcon />
      <div class="about_page_wrapper">
      
      {/* <div className="about_image">  */}
      <img src="/damalifam.jpg" className='aboutimg' alt='happy family'/>
        <span className="hey">Hey!</span><span className="damali">I'm Damali</span>
        {/* </div> */}
      <div className="about_text"><p className='aboutp1'>Damali is originally from New Jersey but grew up in Florida with her 4 siblings, parents and mulitude of pets. She's 
      been passionate about baking since she was 12 and continued pursuing that passion throughout high school and after.</p><br/> <p className='aboutp2'>She's worked in different bakeries
      across New York and uses her knowledge of different cultures and experiences to add unique flavors to her treats. Damali has lived in Austin
      for the past 5 years with her fiance and son.</p></div>
      </div>
      <SlimFooter />
    </div>
  );
}