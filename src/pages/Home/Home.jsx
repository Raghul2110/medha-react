import React from "react";
import { useNavigate  , Link } from "react-router-dom";
import {
  Users,
  Clock,
  ShieldCheck,
  Activity,
  CloudSync,
  Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const services = [
          { name: "VPS Hosting", path: "/vps-hosting" },
          { name: "Dedicated Servers", path: "/dedicated-servers" },
          { name: "Microsoft 365 Plans", path: "/microsoft-365" },
          { name: "Microsoft Azure", path: "/azure" },
          { name: "HIPAA Cloud Hosting", path: "/hipaa-hosting" },
          { name: "Private Cloud", path: "/private-cloud" },
          { name: "PCI DSS Hosting", path: "/pci-hosting" },
          { name: "Colocation Services", path: "/colocation" },
          { name: "Managed ERP Hosting", path: "/erp-hosting" },
          { name: "SAP Hosting", path: "/sap-hosting" },
          { name: "Google Workspace", path: "/google-workspace" },
          { name: "Google Cloud Platform", path: "/gcp" },
          { name: "Application Hosting", path: "/app-hosting" },
          { name: "Database Hosting", path: "/db-hosting" },
          { name: "Public Cloud", path: "/public-cloud" },
        ];


        const serverTags=[
          { name: "Windows Server", path: "/windows-server" },
          { name: "Linux Server", path: "/linux-server" },
          { name: "Exchange Server", path: "/exchange-server" },
          { name: "MS SQL Server", path: "/mssql-server" },
          { name: "MySQL Server", path: "/mysql-server" },
          { name: "VMware Server", path: "/vmware-server" },
          { name: "Virtualization", path: "/virtualization" },
          { name: "IIS Server", path: "/iis-server" },
          { name: "SharePoint Server", path: "/sharepoint-server" },
          { name: "Application Server", path: "/application-server" },
        ];

  return (
    <div className="home-container">
      <Navbar />
      <Hero />

      {/*  SERVICES CARDS */}
      <section className="services-section">

        {/* CARD 1 */}
        <div className="service-card" onClick={() => navigate("/services")}>
          <div className="card-top">
            <div className="card-header">
              <h4>RMM and PSA Dashboard</h4>
              <Activity size={18} className="icon-blue" />
            </div>

            <div className="status-list">
              <p><Users size={14}/> Endpoints Health <span className="green">847/850</span></p>
              <p><ShieldCheck size={14}/> Patch Compliance <span className="blue">98.2%</span></p>
              <p><Clock size={14}/> Open Tickets <span className="orange">23 active</span></p>
            </div>
          </div>

          <div className="card-bottom">
            <h3>White Label MSP</h3>
            <p>You can’t afford 6 more techs. We’ll be your 24/7 team. Your cliens never know.</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="service-card" onClick={() => navigate("/services")}>
          <div className="card-top">
            <div className="card-header">
              <h4>Migration Dashboard</h4>
              <CloudSync size={18} className="icon-green" />
            </div>

            <div className="migration-stats">
              <p>Exchange → M365 <span className="green">94%</span></p>

              <div className="progress-bar">
                <div className="progress" style={{ width: "94%" }}></div>
              </div>

              <p className="sub-text"><Users size={12}/> 1,247 mailboxex migrated</p>
              <p className="sub-text"><ShieldCheck size={12}/> 847 GB transferred</p>
              <ul></ul>
              <p>Zero downtime</p>
            </div>
          </div>

          <div className="card-bottom">
            <h3>Cloud</h3>
            <p>Need Microsoft 365 setup today? Done. HIPAA compliant?We handle the paperwork.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="service-card" onClick={() => navigate("/services")}>
          <div className="card-top">
            <div className="card-header">
              <h4>Live Support</h4>
              <Zap size={18} className="icon-red" />
            </div>

            <div className="support-alert">
              <p className="status-badge red-bg">CRITICAL</p>
              <p>SQL Server down - 150 users affected</p>
              <p className="green">● Engineer assigned</p>
              <p>847 tickets resolved this month</p>
              <p className="blue-text sub-text">
                {/* <Clock size={12}/> Response: 4m */}
              </p>
              <p>99.8% SLA compliance</p>
            </div>
          </div>

          <div className="card-bottom">
            <h3>Professional Services</h3>
            <p>Windows crashed. Exchange won't start. SOL is down. We fix it in 15 minutes</p>
          </div>
        </div>

      </section>

      {/*  STATS */}
      <section className="stats-section">
        <p className="stats-text">
          9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries
        </p>

        <div className="stats-container">
          <div className="stat-box"><h2>9+</h2><p>Years in business</p></div>
          <div className="stat-box"><h2>1.2K+</h2><p>Business served</p></div>
          <div className="stat-box"><h2>5K+</h2><p>Servers managed</p></div>
          <div className="stat-box"><h2>1+ PB</h2><p>Data migrated</p></div>
          <div className="stat-box"><h2>99.99%</h2><p>Uptime SLA</p></div>
        </div>
      </section>

      {/*  MSP SECTION */}
      <section className="msp-section">

        <p className="msp-tag">• For MSP Partners</p>

        <h1 className="msp-title">White Label MSP Services</h1>

        <div className="msp-desc">
          Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4 weeks — your logo, 
          <p>your pricing, our certified team.</p>
        </div>

        <p className="learn-more" onClick={() => navigate("/white-label-msp")}>
          Learn more →
        </p>

        <div className="msp-features">

          <div className="feature-box">
            <h4>Getting Started</h4>
            <p>Pricing takes 5 minutes. Onboarding takes 2 weeks. No contracts.</p>
          </div>

          <div className="feature-box">
            <h4>Managed IT Services</h4>
            <p>helpdesk, monitoring, and patching. Under your logo. Billed to you.</p>
          </div>

          <div className="feature-box">
            <h4>NOC & SOC</h4>
            <p>We watch your client's networks 24/7.Threats get stopped. you get the credit.</p>
          </div>

          <div className="feature-box">
            <h4>Staff Augmentation</h4>
            <p>Need a window admin for 10 hours? Hire ours. Invoice your client. We handle payroll.</p>
          </div>

        </div>

      </section>

      {/* CLOUD SOLUTIONS */}
      <section className="cloud-section">

        <p className="cloud-tag"><b>• Cloud & Hosting</b></p>

        <h1 className="cloud-title">Cloud Solutions</h1>

        <p className="cloud-desc">
          Need hosting today? We set it up. <b>HIPAA? We sign the BAA.</b>
          Questions? Call an admin, not a chatbot.
        </p>

        <div className="cloud-box-container">

          {/* BOX 1 */}
          <div
            className="cloud-box"
            onClick={() => navigate("/hosting")}
          >
            <h4>Hosting Solutions</h4>
            <p>VPS starts at $15/month. Need more power? Upgrade without migrating.</p>
          </div>

          {/* BOX 2 */}
          <div
            className="cloud-box"
            onClick={() => navigate("/speciality-hosting")}
          >
            <h4>Specialty Hosting</h4>
            <p>Running a hospital? Need PCI compliance? We know the paperwork.</p>
          </div>

          {/* BOX 3 */}
          <div
            className="cloud-box"
            onClick={() => navigate("/microsoft-solutions")}
          >
            <h4>Microsoft Solutions</h4>
            <p>Microsoft 365 licenses delivered in 24 hours. Local invoicing, local support.</p>
          </div>

          {/* BOX 4 */}
          <div
            className="cloud-box"
            onClick={() => navigate("/security")}
          >
            <h4>Security & Compliance</h4>
            <p>SSL certs installed same day. Compliance audits handled.</p>
          </div>

        </div>

      </section>

{/* for popular cloud hosting service */}
      <section>
        <div className="cloud-services">
          <h2>Popular Cloud Hosting Services</h2>

          <div className="service-buttons">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => navigate(service.path)}
                className="service-btn"
              >
                {service.name}
              </button>
            ))}
          </div>
          <Link
          to="/cloud-hosting"
            className="view-all"
          >
            View all cloud solutions →
          </Link>
        </div>
      </section>


      {/* This is Professional IT Services */}
    <div className="professional-section">

      <p className="breadcrumb">• IT Services & Support</p>

      <h1>Professional IT Services</h1>

      <p className="subtitle">
        Server crashed on Saturday? Migration failed? We answer in 15 minutes. 24/7.
      </p>

      <p
        className="view-services"
        onClick={() => navigate("/professional-services")}
      >
        View all services →
      </p>

      {/* 🔥 SERVER SUPPORT BOX */}
      <div className="server-box">

        <h2>Server Support</h2>
        <p className="small-text">15-minute response • 24/7/365</p>

        <p className="desc">
          Your server’s down. Call us. We answer in 15 minutes. Not helpdesk, actual admins.
        </p>

        <div className="tag-container">
          {serverTags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              onClick={() => navigate(tag.path)}
            >
              {tag.name}
            </span>
          ))}
        </div>

      </div>
    </div>
</div>
  );
}

export default Home;