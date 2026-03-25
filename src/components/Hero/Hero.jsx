import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>
        White Label MSP, Cloud Hosting <br />
        <span>& 24/7 Server Support</span>
      </h1>

      <p>
        Can't afford 6 more techs? Server crashed? Migration failed? 
        We answer in 15 minutes.
      </p>

      <button className="hero-btn">💬 Chat with us →</button>

      <small>Usually responds in under 2 minutes</small>
    </div>
  );
}

export default Hero;