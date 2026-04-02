import calculator from '../assets/calculator.png';
import person from '../assets/person.png';
import rise from'../assets/rise.png';
import harddisk from'../assets/hard disk.png';

export function Engineer(){
    return(
        <>
        <div>
      <div className="displayFlex">
        <div className="calcuu">
          <h3>
            Your Current Setup
          </h3>
          <label className="line1"><h4> Level 1 Engineers (Helpdesk) </h4></label>
          <input type="number"  style={{
              width:"450px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black' 
            }}
          />
          <p>White label: <b>$1,600/mo •</b> Market: <b>$3,800/mo</b></p>

          <label className="line1"><h4> Level 2 Engineers (Advanced) </h4> </label>
          <input type="number" style={{
              width:"450px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black'
            }} 
          />
          <p>White label: <b>$2,500/mo • </b>Market: <b>$5,500/mo</b></p>

          <label className='line1'><h4>Level 3 / NOC Engineers</h4></label>
          <input type="number" style={{width:"450px", padding: "13px", borderRadius:"10px", border: '1px solid black'}} />
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
          <p className="house">Hiring in-house</p>
          <hr />

        <p className='house1'>WITH MEDHA CLOUD</p>
        <p 
          style={{ 
            color: 'Darkblue',
            fontSize: '25px',  
            }}>
              <strong>$0</strong>
        </p>
        <p className='house'>0 engineers</p>
        <hr />

        <p className='house1'>MONTHLY SAVINGS</p>
        <p style={{ 
            color: 'red', 
            fontSize: '25px',  
          }}>
            <strong>$0</strong>
        </p>
        <p className='house'>Every Month</p>
        <hr />

        <p className='house1'>ANNUAL SAVINGS</p>
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
    )
}


export  function PerDevice(){
  return(
    <>
   <div>
      <div className="displayFlex">
        <div className="calcuu">
          <h3>
            Your Current Setup
          </h3>
          <label className="line1"><h4>Workstations / Endpoints</h4></label>
          <input type="number"  style={{
              width:"450px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black' 
            }}
          />
          <p style={{fontSize:"12px"}}>$22/mo each <b>•</b> Min: 15 units or $330/mo</p>

          <label className="line1"><h4>Servers</h4></label>
          <input type="number" style={{
              width:"450px", 
              padding: "13px", 
              borderRadius:"10px", 
              border: '1px solid black'
            }} 
          />
          <p style={{fontSize:"12px"}}>$75/mo each <b>•</b> Min: 3 units or $225/mo</p>

          <label className='line1'><h4>Network Devices (Firewalls, Switches)</h4></label>
          <input type="number" style={{width:"450px", padding: "13px", borderRadius:"10px", border: '1px solid black'}} />
          <p>$45/mo each <b>•</b> Min: 2 units or $90/mo</p>

          <div className='industry'>
            <p> <b>Industry standard:</b> 1 tech per 80 devices @ $5,000/mo</p>
            <p>You need 2 tech(s) for 115 devices</p>
          </div>
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
          <p className="house">Hiring in-house</p>
          <hr />

        <p className='house1'>WITH MEDHA CLOUD</p>
        <p 
          style={{ 
            color: 'Darkblue',
            fontSize: '25px',  
            }}>
              <strong>$0</strong>
        </p>
        <p className='house'>0 engineers</p>
        <hr />

        <p className='house1'>MONTHLY SAVINGS</p>
        <p style={{ 
            color: 'red', 
            fontSize: '25px',  
          }}>
            <strong>$0</strong>
        </p>
        <p className='house'>Every Month</p>
        <hr />

        <p className='house1'>ANNUAL SAVINGS</p>
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

