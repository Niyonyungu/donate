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
      // Check if the selected party has smaller donation
      if (selectedParty === "Democrats" && amount < republicansDonations) {
        // Subtract the donation amount from Republicans
        setRepublicansDonations(prev => prev - amount);
        // Add the deducted amount to Democrats
        setDemocratsDonations(prev => prev + amount);
      } else if (selectedParty === "Republicans" && amount < democratsDonations) {
        // Subtract the donation amount from Democrats
        setDemocratsDonations(prev => prev - amount);
        // Add the deducted amount to Republicans
        setRepublicansDonations(prev => prev + amount);
      } else {
        // Update donations based on selected party
        if (selectedParty === "Democrats") {
          setDemocratsDonations(prev => prev + amount);
        } else if (selectedParty === "Republicans") {
          setRepublicansDonations(prev => prev + amount);
        }
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
          <h3 className={donat.rep}>Republicans</h3>
          <p>{republicansDonations} <span>$</span></p>
          <div className={donat.bubble1} >&#9679;</div>
        </div>
        <div className={donat.center}>
          <h3>Total Donation</h3>
          <h2><span className={donat.total}>{totalDonations}</span> $ </h2> 
          <div className={donat.bubble3}>&#128156;</div>
        </div>
        <div className={donat.side}>
          <h3 className={donat.dem}>Democrats</h3>
          <p>{democratsDonations}<span> $</span></p>
          <div className={donat.bubble2} >&#9679;</div>
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
