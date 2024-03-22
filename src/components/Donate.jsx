import React from 'react';
import donat from "./Donate.module.css";

const Donate = () => {

  return (
    <div className={donat.container}> 
      <div className={donat.parties}>
        <div className={donat.side}>
            <h2 className={donat.rep}>Republican</h2>
            <p> 20 <span>$</span></p>
            {/* <div className={`${donat.bubble} ${donat.bubble1}`}></div> */}
            <div className={donat.heartr}>❤</div>
           </div>
           <div className={donat.center}>
              <h1>Total Donation</h1>
              <h2><span className={donat.total}>40</span>{""} $ </h2> 
            {/* <div className={`${donat.bubble} ${donat.bubble3}`}></div> */}
            <div className={donat.heartc}>❤</div>
          </div>
          <div className={donat.side}>
            <h2 className={donat.dem}>Democrat</h2>
            <p> 20<span>$</span></p>
            {/* <div className={`${donat.bubble} ${donat.bubble2}`}></div> */}
            <div className={donat.heartd}>❤</div>
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
