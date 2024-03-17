import React, { useState } from 'react';
import donat from "./Donate.module.css";

const Donate = () => {
  const [donations, setDonations] = useState({ Republicans: 0, Democrats: 0 });
  const [selectedParty, setSelectedParty] = useState("");

  const handlePartySelection = (event) => {
    setSelectedParty(event.target.value);
  };

  const handleDonation = () => {
    if (selectedParty && donations[selectedParty] !== undefined) {
      const newDonations = { ...donations };
      newDonations[selectedParty] += Number(document.getElementById('donationInput').value);
      setDonations(newDonations);
    }
  };

  const handleReset = () => {
    setDonations({ Republicans: 0, Democrats: 0 });
  };

  const totalDonation = donations.Republicans + donations.Democrats;
  const showCenterBubble = donations.Republicans !== 0 && donations.Republicans === donations.Democrats;

  return (
    <div className={donat.container}> 
      <div className={donat.parties}>
        <div className={donat.side}>
            <h2 className={donat.rep}>Republicans</h2>
            <p>{donations.Republicans} <span>$</span></p>
            <div className={`${donat.bubble} ${donat.bubble1}`}></div>
        </div>
          <div className={donat.center}>
              <h1>Total Donation</h1>
              <h2><span className={donat.total}>{totalDonation}</span>{""} $ </h2>
        {showCenterBubble && (
              <div className={`${donat.bubble} ${donat.bubble3}`}></div>
              )}
          </div>
        <div className={donat.side}>
            <h2 className={donat.dem}>Democrats</h2>
            <p>{donations.Democrats} <span>$</span></p>
            <div className={`${donat.bubble} ${donat.bubble2}`}></div>
        </div>
      </div>
      <div className={donat.donatee}>
           <select name="" id="" className={donat.sele} onChange={handlePartySelection}>
            <option value="">Select Party</option>
            <option value="Republicans">Republicans</option>
            <option value="Democrats">Democrats</option>
           </select>
           <input type="number" id="donationInput" className={donat.inp} placeholder='$' />
           <button className={donat.dontatebtn} onClick={handleDonation}>Donate</button>
           <button className={donat.dontatebtnr} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Donate;
