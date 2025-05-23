import React, { useEffect, useRef } from "react";

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null); // ✅ Type is added here

  useEffect(() => {
    if (heroRef.current) {
      const container = heroRef.current;
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2.11;
    }
  }, []);

  return (
    <div className="contact-container section" id="letstalk">
      <div className="contact-hero" ref={heroRef}>
        <span>CONTACT US</span>
        <span>•</span>
        <span>CONTACT US</span>
        <span>•</span>
        <span>CONTACT US</span>
        <span>•</span>
      </div>
      <div className="contact-list">
        <div className="message">Collab begins with hello 👋</div>
        <div className="input-container">
          <input type="email" placeholder="Enter your email here" />
          <button className="send-email-button">Send Email →</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
