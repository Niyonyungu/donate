import React from "react";
import Type from "./Type";
import { TbHandClick } from "react-icons/tb";


function Home() {
  return (
    <section className="home-container">
      <div className="type-head">
        <h1>Welcome To DonatePurple</h1>
        <h4>You Can Choose To Donate any Amount Of Money 
          <br /> To your Favorite Party By A Single Click 
          <span><TbHandClick className="click" />
        </span> 
        </h4>
         <p>Choose Today! it's Either</p>
         <Type className="type" />
      </div>   
    </section>
  );
}

export default Home;
