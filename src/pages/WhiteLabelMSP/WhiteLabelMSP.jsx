import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import calculator from '../../assets/calculator.png';
import person from '../../assets/person.png';
import rise from'../../assets/rise.png';
import harddisk from'../../assets/hard disk.png';
import './WhiteLabel.css';



function WhiteLabelMSP() {
  return (
    <>
    <Navbar />
    <div>
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
      <img src={person} alt="" className="person"/>
      <span>
        Per Engineer
      </span>
      <img src={harddisk} alt=""  className="disk"/>
      <span>Per Device</span>
      </div>
      <div className="displayFlex">
        <div className="calcuu">
          <h3>
            Your Current Setup
          </h3>
          <label>Level 1 Engineers (Helpdesk)</label>
          <input 
            type="number" 
            style={{
              width:"400px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black' 
            }}
          />
          <p>White label: <b>$1,600/mo •</b> Market: <b>$3,800/mo</b></p>
          <label htmlFor="">Level 2 Engineers (Advanced)</label>
          <input 
            type="number" 
            style={{
              width:"400px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black'
            }} 
          />
          <p>White label: <b>$2,500/mo • </b>Market: <b>$5,500/mo</b></p>
          <label htmlFor=""><h3>Level 3 / NOC Engineers</h3></label>
          <input type="number" style={{width:"400px", padding: "13px", borderRadius:"10px", border: '1px solid black'}} />
          <p>White label: <b>$2,700/mo •</b> Market: <b>$7,000/mo</b></p>
        </div>

        <div className="roicontainer">
          <div className="roi">
            <img src={rise} alt="arrow" className="yourroi" />
            <span>YOUR ROI</span>
            <div className="rois">
              <p className="percent-text">73%</p>
              <p className="helper-text">
                Consider adjusting inputs
              </p>
            </div>
          </div>

          <div className="cost">
          <p>
            Current Monthly Cost
          </p>
          <p 
            style={{ 
              fontSize: '25px',  
              }}>
                <strong>$0</strong>
          </p>
          <p>Hiring in-house</p>
          <hr />

        <p>WITH MEDHA CLOUD</p>
        <p 
          style={{ 
            color: 'Darkblue',
            fontSize: '25px',  
            }}>
              <strong>$0</strong>
        </p>
        <p>0 engineers</p>
        <hr />

        <p>MONTHLY SAVINGS</p>
        <p style={{ 
            color: 'red', 
            fontSize: '25px',  
          }}>
            <strong>$0</strong>
        </p>
        <p>Every Month</p>
        <hr />

        <p>ANNUAL SAVINGS</p>
        <p 
          style={{ 
            color: 'red', 
            fontSize: '25px',  
            }}>
              <strong>$0</strong>
        </p>
        <p>First Year Total</p>
        
          </div>
        </div>
      </div>
      
    </div>

   
    </>
  );
}

export default WhiteLabelMSP;