import React from "react";
import Footer from "../components/Footer";
import PieBanner from "../components/PieBanner";
import Triptych from "../components/Triptych";
import DoughnutBanner from "../components/DoughnutBanner";
import MiddleText from "../components/MiddleText";

//Landing/Home page. Displays components
export default function Home() {
  return (
    <div className="homebody">
      <PieBanner />
        <Triptych />
          <MiddleText />
        <DoughnutBanner />
      <Footer />
    </div>
  );
}

 