import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import calculator from '../../assets/calculator.png';
import person from '../../assets/person.png';
import './WhiteLabel.css';


function WhiteLabelMSP() {
  return (
    <>
    <Navbar></Navbar>
    <div>
      
      <p> <img src={calculator} alt=""  className="calci"  / >  ROI Calculator</p>
      <p>Calculate your potential savings with white label support service</p>
    </div>
    <div>
      <p ><img src={person} alt="" className="person"/>Per Engineer</p>
    </div>
    <div>
      <h3>Your Current Setup</h3>
      <label htmlFor=""><h3>Level 1 Engineers (Helpdesk)</h3></label>
      <input type="number" />
      <p>White label: <b>$1,600/mo •</b> Market: <b>$3,800/mo</b></p>
      <label htmlFor=""><h3>Level 2 Engineers (Advanced)</h3></label>
      <input type="number" />
      <p>White label: <b>$2,500/mo • </b>Market: <b>$5,500/mo</b></p>
      <h3></h3>
      <label htmlFor=""><h3>Level 3 / NOC Engineers</h3></label>
      <input type="number" />
      <p>White label: <b>$2,700/mo •</b> Market: <b>$7,000/mo</b></p>
    </div>
    </>
  );
}

export default WhiteLabelMSP;