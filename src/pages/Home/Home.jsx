import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Clock,
  ShieldCheck,
  Activity,
  CloudSync,
  Zap,
  Server,
  Cloud,
  Shield,
  Code
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const cloudCards = [
    {
      title: "Hosting Solutions",
      desc: "VPS starts at $15/month. Need more power? Upgrade without migrating.",
      icon: <Server size={18} />,
      path: "/hosting",
    },
    {
      title: "Specialty Hosting",
      desc: "Running a hospital? Need PCI compliance? We know the paperwork.",
      icon: <Cloud size={18} />,
      path: "/specialty",
    },
    {
      title: "Microsoft Solutions",
      desc: "Microsoft 365 licenses delivered in 24 hours. Local invoicing, local support.",
      icon: <Code size={18} />,
      path: "/microsoft",
    },
    {
      title: "Security & Compliance",
      desc: "SSL certs installed same day. Compliance audits handled.",
      icon: <Shield size={18} />,
      path: "/security",
    },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <Hero />

      {/* 🔥 SERVICES */}
      <section className="services-section">
        {/* same as your code (no change) */}
      </section>

      {/* 🔥 STATS */}
      <section className="stats-section">
        <p className="stats-text">
          9 years in business fixing IT problems for MSPs and industries
        </p>

        <div className="stats-container">
          <div className="stat-box"><h2>9+</h2><p>Years</p></div>
          <div className="stat-box"><h2>1.2K+</h2><p>Clients</p></div>
          <div className="stat-box"><h2>5K+</h2><p>Servers</p></div>
          <div className="stat-box"><h2>1+ PB</h2><p>Data</p></div>
          <div className="stat-box"><h2>99.99%</h2><p>Uptime</p></div>
        </div>
      </section>

      {/* 🔥 MSP SECTION */}
      <section className="msp-section">
        <p className="msp-tag">• For MSP Partners</p>

        <h1 className="msp-title">White Label MSP Services</h1>

        <p className="msp-desc">
          Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4 weeks — your logo,
          your pricing, our certified team.
        </p>

        <p className="learn-more" onClick={() => navigate("/white-label-msp")}>
          Learn more →
        </p>

        <div className="msp-features">
          <div className="feature-box">
            <h4>Getting Started</h4>
            <p>Setup in minutes. No contracts.</p>
          </div>

          <div className="feature-box">
            <h4>Managed IT</h4>
            <p>Monitoring & patching under your brand.</p>
          </div>

          <div className="feature-box">
            <h4>NOC & SOC</h4>
            <p>24/7 monitoring & threat protection.</p>
          </div>

          <div className="feature-box">
            <h4>Staff Augmentation</h4>
            <p>Hire engineers instantly.</p>
          </div>
        </div>
      </section>

      {/* 🔥 CLOUD SOLUTIONS (NEW) */}
      <section className="cloud-section">

        <p className="cloud-tag">• Cloud & Hosting</p>

        <h1 className="cloud-title">Cloud Solutions</h1>

        <p className="cloud-desc">
          Need hosting today? We set it up. HIPAA? We sign the BAA.
          Questions? Call an admin, not a chatbot.
        </p>

        <div className="cloud-grid">
          {cloudCards.map((card, index) => (
            <div
              key={index}
              className="cloud-card"
              onClick={() => navigate(card.path)}
            >
              <div className="cloud-card-header">
                {card.icon}
                <span className="arrow">→</span>
              </div>

              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;