import React, { useEffect, useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Home");

  const [intoMessage, setIntroMessage] = useState("intro");

  // Scroll to the section when a navigation item is clicked
  const handleNavClick = (option: string, sectionId: string) => {
    setOpenNav(false); // Optionally close the nav menu
    setSelectedOption(option); // Set selected option

    // Delay in milliseconds (e.g., 500ms)
    const delay = 1000;

    // Use setTimeout to add delay before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, delay); // Delay before scrolling
  };

  useEffect(() => {
    // Delay in milliseconds (e.g., 500ms)
    const revealTimer = 1500;
    const StayTimer = 1000;
    const dropOutTimer = 800;
    const LogoTimmer = 1000;

    const stay = setTimeout(() => {
      setIntroMessage("stay");
    }, revealTimer);

    const reveal = setTimeout(() => {
      setIntroMessage("dropOut");
    }, revealTimer + StayTimer);

    const logo = setTimeout(() => {
      setIntroMessage("logo");
    }, revealTimer + StayTimer + dropOutTimer + 1000);

    const last = setTimeout(() => {
      setIntroMessage("last");
    }, revealTimer + StayTimer + dropOutTimer + LogoTimmer + 2000);
  }, []);
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="logo">LOGO</div>
        <div className="logo-name">
          <div
            className={`intro-container ${intoMessage === "last" ? "animated" : ""
              }`}
          >
            {intoMessage != "logo" && intoMessage !== "last" ? (
              <div className="intro-message message">
                {"INTRODUCING".split("").map((char, index) => (
                  <span
                    className={`${intoMessage}`}
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ) : (
              <div className="logo-Name message">
                {"Logo-Name".split("").map((char, index, arr) => {
                  const center = (arr.length - 1) / 2;
                  const delay = Math.abs(index - center) * 0.1;
                  return (
                    <span
                      className={`${intoMessage}`}
                      key={index}
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div
          className={`hamburger ${openNav ? "active" : ""}`}
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="line "></div>
          <div className="line "></div>
        </div>
      </div>

      <div className={`nav-options-wrapper ${openNav ? "active" : ""}`}>
        <div className="nav-options-container">
          <div className="navigation-container">
            <div className="nav-options">
              <div
                className={`options ${selectedOption === "Home" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("Home", "home")}
              >
                Home
              </div>
              <div
                className={`options ${selectedOption === "About" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("About", "about")}
              >
                About
              </div>
              <div
                className={`options ${selectedOption === "Works" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("Works", "works")}
              >
                Works
              </div>
              <div
                className={`options ${selectedOption === "Lets Talk" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("Lets Talk", "letstalk")}
              >
                Lets Talk
              </div>
            </div>

            <div className="nav-contact">
              <div className="location"><span>🌏</span> Chennai, India</div>
              <div className="contact">
                <div className="content">
                  Collaboration begins with hello 👋
                </div>
                <div className="email">nalvazhuthi2002@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="socialLinks">
            <div className="social">LinkedIn</div>
            <div className="social">Instagram</div>
            <div className="social">Twitter</div>
            <div className="social">BlueSky</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;


