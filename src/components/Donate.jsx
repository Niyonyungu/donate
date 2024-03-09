import React from 'react'
import donat from "./Donate.module.css";

const Donate = () => {
  return (
    <div className={donat.container}> 
      <div className={donat.parties}>
        <div className={donat.side}>
            <h2 className={donat.rep}>Republicans</h2>
            <p> 200 <span>$</span></p>
            <div className={`${donat.bubble} ${donat.bubble1}`}></div>
        </div>
        <div className={donat.center}>
            <h1>Total Donation</h1>
            <h2><span className={donat.total}>400</span>{""} $ </h2>
            <div className={`${donat.bubble} ${donat.bubble3}`}></div>
        </div>
        <div className={donat.side}>
            <h2 className={donat.dem}>Democratics</h2>
            <p>200 <span>$</span></p>
            <div className={`${donat.bubble} ${donat.bubble2}`}></div>
        </div>
      </div>
      <div className={donat.donatee}>
           <select name="" id="" className={donat.sele}>
            <option value="">Select Party</option>
            <option value="">Democrats</option>
            <option value="">Republicans</option>
           </select>
           <input type="text" className={donat.inp} placeholder='$' />
           <button className={donat.dontatebtn}>Donate</button>
      </div>
    </div>
  )
}

export default Donate