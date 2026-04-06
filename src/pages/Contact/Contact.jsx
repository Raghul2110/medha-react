import Navbar from "../../components/Navbar/Navbar";
import './Contact.css'

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
    </>
  )
}

export default Contact;