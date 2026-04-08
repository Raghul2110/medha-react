import Navbar from '../../components/Navbar/Navbar';
import './Blog.css';
import { Link } from "react-router-dom"
function Blog (){
    return(
        <>
        <Navbar></Navbar>
        <section>
            <div className="one">

                <div className='con'>
                    <Link to="/" className='line'>Home   /</Link>
                    <Link to="/contact" className='line'>
                        Blog    /
                    </Link>
                    
                    <p>Microsoft365</p>
                </div>
                
                <div className='con1'>
                    <h1>Microsoft 365 Blog: Licensing, Administration & 
                    <br />
                    Expert Guides</h1>
                </div>
                <div className='con2'>
                    Master Microsoft 365 — from licensing and plan selection to Exchange Online 
                    <br />
                    administration and Teams deployment. Guides from certified Microsoft 
                    <br />
                    professionals.
                </div>
                <div>
                    <pre>325 Articles    •   11 Expert Authors   •   Updated Weekly</pre>
                </div>
                <div className='con3'>
                    <pre>Related Services: 
                        <Link to="/microsoft-365" style={{textDecoration:"none" , color:"white", fontWeight:"bold"}}>  Microsoft 365 Plans & Pricing → </Link> </pre>
                    
                </div>
            </div>
        </section>

        <section>
            <div className='con4'>
                <span>
                    Our Microsoft 365 blog covers everything from licensing decisions and plan comparisons to Exchange Online 
                    <br />
                    administration, SharePoint deployment, and Teams optimization. With 477+ articles, this is one of the most
                    <br />
                    comprehensive M365 resources on the web.

                    <div className='con5'>
                    Whether you're comparing Microsoft 365 Business vs Enterprise plans, planning a migration to Microsoft 365, or
                    <br />
                    troubleshooting Exchange Online mail flow rules, our certified Microsoft professionals have written step-by-step 
                    <br />
                    guides for every scenario.
                    </div>
                    
                    <div className='con6'>
                    Key topics include Microsoft 365 licensing and plan selection (Business Basic, Standard, Premium, E3, E5), Exchange
                    <br />
                    Online administration and mail flow configuration, SharePoint Online site management and permissions, Microsoft
                    <br />
                    Teams deployment and governance, OneDrive for Business storage management, and Microsoft Copilot integration
                    <br />
                    guides.
                    </div>

                    <div className='con7'>
                    Use our free M365 License Comparison tool to find the right plan for your organization, or read our comprehensive
                    <br />
                    Microsoft 365 Licensing Guide — a 14-chapter deep dive into every plan, add-on, and pricing tier available in 2026.
                    </div>
                </span>
            </div>
        </section>

        <section >
            <div className='con8'>
            <div className='con9'>

                
                <Link to="/blog/microsoft-365-statistics-2026" style={{textDecoration:"none"}}>
                <div className='con10'>
                <pre >Mar14, 2026   •   14 min read    •    Medha Cloud</pre>
                <h3 className='con11'>Microsoft 365 Statistics 2026. Market Share, Adoption & Pricing Data</h3>
                <p>Comprehensive Microsoft 365 statistics for 2026: 446M paid seats, market share vs Google Workspace, 
                <br />
                enterprise adoption rates, pricing tiers, SaaS spending trends, and revenue data. 
                </p>

                <p className='con12'> Read Article → </p> 
                 </div>
                </Link>
               

                {/* <div className='con9'>
                <pre >Mar14, 2026   •   14 min read    •    Medha Cloud</pre>
                <h3 className='con10'>Microsoft 365 Statistics 2026. Market Share, Adoption & Pricing Data</h3>
                <p>Comprehensive Microsoft 365 statistics for 2026: 446M paid seats, market share vs Google Workspace, 
                <br />
                enterprise adoption rates, pricing tiers, SaaS spending trends, and revenue data. 
                </p>

                <p className='con11'> Read Article → </p> 
                </div> */}

            </div>
            <div>
                dfgjkl;''
            </div>
            </div>
        </section>
        </>
    );
}

export default Blog;