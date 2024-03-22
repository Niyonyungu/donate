import React from 'react';
import donat from "./Donate.module.css";

const Donate = () => {

  return (
    <div className={donat.container}> 
      <div className={donat.parties}>
        <div className={donat.side}>
            <h2 className={donat.rep}>Republicans</h2>
            <p> 20 <span>$</span></p>
            <div className={donat.bubble1}>&#9679;</div>
           </div>
           <div className={donat.center}>
              <h1>Total Donation</h1>
              <h2><span className={donat.total}>40 </span>{""} $ </h2> 
            <div className={donat.bubble3}>&#128156;</div>
          </div>
          <div className={donat.side}>
            <h2 className={donat.dem}>Democrats</h2>
            <p> 20<span> $</span></p>
            <div className={donat.bubble2}>&#9679;</div>
        </div>
      </div>
      <div className={donat.donatee}>
           <select name="" id="" className={donat.sele} >
            <option value="">Select Party</option>
            <option value="Democrats">Democrats</option>
            <option value="Republicans">Republicans</option>
           </select>
           <input type="number" id="donationInput" className={donat.inp} placeholder='$' />
           <button className={donat.dontatebtn} >Donate</button>
      </div>
    </div>
  );
};

export default Donate;
