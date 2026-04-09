import Navbar from "../components/Navbar/Navbar";
import './Microsoft365Statistics.css'
import sir from '../assets/sir photo.avif';
import microsoft from '../assets/microsoft.jpg'

function Microsoft365Statistics(){

    const data = [
    {
      metric: "Overall market share (by domains)",
      microsoft: "45.46%",
      google: "50.34%",
    },
    {
      metric: "Enterprise market share (1,000+ employees)",
      microsoft: "~58%",
      google: "~32%",
    },
    {
      metric: "Fortune 500 usage",
      microsoft: "75%",
      google: "42%",
    },
    {
      metric: "Total paid seats (global)",
      microsoft: "~446 million",
      google: "~10 million paid business",
    },
    {
      metric: "Education + free tiers",
      microsoft: "Large but undisclosed",
      google: "3+ billion (Gmail, free tier)",
    },
  ];

    return(
        <>
        <Navbar></Navbar>
        <section>

            <div className="art1">
                <p className="art2">Microsoft 365</p>
            
                <h1 style={{fontSize:"42px"}}>Microsoft 365 Statistics 2026: Market 
                    <br />
                    Share, Adoption & Pricing Data</h1>
            
            <div className="art3">
                <img src={sir} alt="Sreenivasa"  style={{width:'50px',height:'50px', borderRadius:"50%", objectFit: 'cover', border:'2px solid #ccc'}}/>

                    <p style={{paddingLeft:"10px"}}> Sreenivasa Reddy G
                    <br />
                    Founder & CEO</p>
                
                <pre style={{paddingTop:"10px"}}>     •      Mar 14, 2026     •   14 min read</pre>
            </div>
            </div>
            
        </section>

        <section>
            <div className="art4">
            <img src={microsoft} alt="MicroSoft365 Image" style={{borderRadius:"20px" , marginBottom:"50px"}} />
            
            <p style={{fontSize:"20px"}}><b >Microsoft 365 has approximately 446 million paid seats globally and commands roughly 58%
                <br />
                market share in enterprise productivity software.</b>This page compiles the most important
                <br />
                Microsoft 365 statistics for 2026 — market share, pricing, adoption rates, revenue, and how it
                <br></br>
                compares to Google Workspace across different segments.
                </p>
            </div>
        </section>

        <section>
            <div className="art5">
            <h1>Table Of Contents</h1>
            </div>
        </section>

        <section>
            <div className="art6">
                <a href="">Microsoft 365 vs Google Workspace Market Share</a>
                <br />
                <a href="">Enterprise Adoption & Seat Count</a>
                <br />
                <a href="">Microsoft 365 Pricing Comparison</a>
                <br />
                <a href="">Google Workspace Pricing Comparison</a>
                <br />
                <a href="">Microsoft 365 Revenue</a>
                <br />
                <a href="">Enterprise SaaS Spending</a>
                <br />
                <a href="">AI Features & Copilot Adoption</a>
                <br />
                <a href="">Dual-Stack Environments</a>
                <br />
                <a href="">Migration Trends</a>
                <br />
                <a href="">Sources</a>
            </div>
        </section>

        <section>
            <div className="art7">
                <h1>Microsoft 365 vs Google Workspace Market Share</h1>
            </div>
        </section>

        <section>
            <div className="art8">
                <p>
                    Market share numbers depend heavily on how you measure: by total domains, by paid enterprise
                    <br />
                    seats, or by revenue. Google Workspace leads in total domain count (driven by small businesses 
                    <br />
                    and education). Microsoft 365 dominates in enterprise seats and revenue.
                </p>
            </div>
        </section>

        <section>
            <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>METRIC</th>
            <th>MICROSOFT 365</th>
            <th>GOOGLE WORKSPACE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.metric}</td>
              <td>{row.microsoft}</td>
              <td>{row.google}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </section>

        </>
    );
}
export default Microsoft365Statistics;