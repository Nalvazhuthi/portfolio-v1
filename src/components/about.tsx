import { useEffect, useState } from "react";
import avatar from "../assets/images/Avatar.png";

const About = () => {
  const [cursorVisibility, setCursorVisibility] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (cursorVisibility) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorVisibility]);

  return (
    <div
      className="about-container section"
      id="about"
      onPointerEnter={() => setCursorVisibility(true)}
      onPointerLeave={() => setCursorVisibility(false)}
    >
      <div className="about-me">
        I'm a Frontend Developer with over 2 years of experience building
        responsive, high-performance web applications. I've worked with global
        brands and fast-growing startups, creating user interfaces that support
        more than 5 million active users worldwide. I began my journey as a
        freelancer and evolved into a full-time developer, gaining hands-on
        experience with modern web technologies like React, Next.js, and
        Three.js. My focus is on crafting seamless, interactive user experiences
        backed by clean, scalable, and accessible code. Now returning to
        freelance work, I'm looking to partner with teams, agencies, and
        founders who value thoughtful design, performance, and pixel-perfect
        execution.
      </div>
      <div className="image-wrapper">
        <img src={avatar} alt="No image" />
      </div>

      {cursorVisibility && (
        <div
          className="custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          Nalvazhuthi
        </div>
      )}
    </div>
  );
};

export default About;
