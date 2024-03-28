import React from "react";
import Type from "./Type";
// import { TbHandClick } from "react-icons/tb"; 
import Donate from "../Donate";

function Home() {
  return (
    <section className="home-container">
      <div className="type-head">
        <h2>Welcome To DonatePurple</h2>
        <h5>You Can Choose To Donate any Amount Of Money 
          <br /> To your Favorite Party By A Single Click 
          {/* <span><TbHandClick className="click" />
              </span>  */}
        </h5>
         <p>Choose Today! it's Either</p>
         <Type className="type" />
      </div>  
      <Donate/> 
    </section>
  );
}

export default Home;
