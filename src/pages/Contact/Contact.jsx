import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import './Contact.css'
import arrow from '../../assets/arrow.png'

function Contact() {
  return (
    <>
    <Navbar></Navbar>
    <section>
    <div className="blog">
      <div className="header"> <p>Home / Blog</p>
      </div>
      <div className="weight"><h1>Medha Cloud Blog</h1>
        </div>
        <span className="size"><p>Expert insights on cloud computing, Microsoft 365, Azure, cybersecurity, and </p>
        <p>managed IT services. Guides and tutorials from certified IT professionals.</p></span>
        <div className="size1"><pre>709+ Articles    •    14 Categories     •   Updated Weekly</pre></div> 
    </div>
    </section>

    <section>
      <div className="section2">
      <div className="head"><h1>Browse by Category</h1></div>
      <p>Explore our service-aligned blog categories — each one connected to expert services</p>
      <p>and solutions.</p>
      </div>
    </section>

    <section>
      
      <div className="blog1">
        <Link to="/blog/microsoft-365" className="link">
        <div className="in">
        <p> <h3>Microsoft 365</h3>
          325 articles
        </p>
        </div>
        <div className="in1">
        <p>Master Microsoft 365 — from
          <br></br>
          licensing and plan selection to...
        </p>
        </div>
        
        <div className="in2"> 
         {/* <Link>
        </Link> */}
        <p>Browse Articles</p>
         <p style={{fontSize:"12px", paddingLeft:"10px",paddingTop:"5px"}}>  Microsoft 365 Plans & 
          <br />
          Pricing</p>
         </div>

         {/* <Link> */}
        <img src={arrow} alt="arrow" style={{height : '30px' , paddingLeft : "20px",}}/>
          {/* </Link> */}
       </Link>
      </div>
      
    </section>
    </>
  )
}

export default Contact;