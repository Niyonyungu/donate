import React, { useState } from 'react';
import donat from "./Donate.module.css";

const Donate = () => {
  // State variables
  const [selectedParty, setSelectedParty] = useState(""); // State for selected party
  const [donationAmount, setDonationAmount] = useState(""); // State for donation amount
  const [democratsDonations, setDemocratsDonations] = useState(0); // Initial donation for Democrats
  const [republicansDonations, setRepublicansDonations] = useState(0); // Initial donation for Republicans
  const [totalDonations, setTotalDonations] = useState(0); // Initial total donations

  // Function to handle donation
  const handleDonate = () => {
    const amount = parseInt(donationAmount);
    if (!isNaN(amount) && amount > 0) {
      // Update donations based on selected party
      if (selectedParty === "Democrats") {
        setDemocratsDonations(prev => prev + amount);
      } else if (selectedParty === "Republicans") {
        setRepublicansDonations(prev => prev + amount);
      }
      // Update total donations
      setTotalDonations(prev => prev + amount);
      // Reset donation amount input
      setDonationAmount("");
    }
  };

  return (
    <div className={donat.container}> 
      <div className={donat.parties}>
        <div className={donat.side}>
          <h2 className={donat.rep}>Republicans</h2>
          <p>{republicansDonations} <span>$</span></p>
          <div className={donat.bubble1}>&#9679;</div>
        </div>
        <div className={donat.center}>
          <h1>Total Donation</h1>
          <h2><span className={donat.total}>{totalDonations}</span> $ </h2> 
          <div className={donat.bubble3}>&#128156;</div>
        </div>
        <div className={donat.side}>
          <h2 className={donat.dem}>Democrats</h2>
          <p>{democratsDonations}<span> $</span></p>
          <div className={donat.bubble2}>&#9679;</div>
        </div>
      </div>
      <div className={donat.donatee}>
        <select name="" id="partySelect" className={donat.sele} onChange={(e) => setSelectedParty(e.target.value)}>
          <option value="">Select Party</option>
          <option value="Democrats">Democrats</option>
          <option value="Republicans">Republicans</option>
        </select>
        <input type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} className={donat.inp} placeholder='$' />
        <button className={donat.dontatebtn} onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
};

export default Donate;
