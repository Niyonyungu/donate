import React from "react";
import { Link } from "react-router-dom";
import { MdSwipeLeftAlt } from "react-icons/md";


function About() {
  return (
    <div className="about-section">
       <h1> What you can Know <span>About Us</span></h1>
       <p>
       Our platform is all about empowering you to make a 
       difference in the political landscape. 
       We've created a user-friendly space where you 
       can easily contribute to your chosen political party.
       Whether you lean left or right, your donation matters. 
       Join us in shaping the future of our nation by 
       supporting your chosen party on Donate Purple. 
       Together, let's make a positive impact and create a brighter tomorrow.
        </p>
        <Link to="/" className="lin"> 
        <MdSwipeLeftAlt className="bac" />
        Donate Now
        </Link>
    </div>
  );
}

export default About;
