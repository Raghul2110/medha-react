import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import calculator from '../../assets/calculator.png';
import person from '../../assets/person.png';
import rise from'../../assets/rise.png';
import harddisk from'../../assets/hard disk.png';
import './WhiteLabel.css';
import {Engineer, PerDevice} from "../../components/Calculator";



function WhiteLabelMSP() {
  const [tab, useTab] = useState("engineer");
  return (
    <>
    <Navbar />
    <section>
      <div className="calculator">
              <img src={calculator} alt=""  className="calci"  />
              <span>
                ROI Calculator
              </span>  
            </div>
            <div className="content">
              <p>
                Calculate your potential savings with white label support service
              </p>
        </div>
        <div className="log">
      <button onClick={() => useTab("engineer")}>
        <img src={person} alt="" className="person"/>
        <span className="in-person">
          Per Engineer
        </span>
      </button>
      <button onClick={() => useTab("device")}>
        <img src={harddisk} alt=""  className="disk"/>
      <span className="in-device">Per Device</span>
      </button>
      
      </div>
    </section>

   {tab === "engineer"?<Engineer /> : <PerDevice /> }
    </>

  );
}





export {WhiteLabelMSP}