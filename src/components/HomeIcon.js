import React from 'react';
import { Link } from "react-router-dom"

export default function HomeIcon() {
  return(
    <div className="home_icon_container_top">
        <Link to='/'><div className="primrose_icon" /></Link>
    </div>
   
  )
}