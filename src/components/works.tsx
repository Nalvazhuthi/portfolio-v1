// Works.tsx
import { useState, useRef, useEffect } from "react";
import { ArrowIcons } from "../assets/svg/exportSVG";
import beauty from "../assets/works/beauty.png";
import theCreator from "../assets/works/theCreator.png";
import petClinic from "../assets/works/petClinic.png";
import englishLearning from "../assets/works/englisgLearning.png";

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [wobble, setWobble] = useState({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0, time: Date.now() });
  const [cursorVisibility, setCursorVisibility] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track global cursor position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setCursorVisibility(
        containerRef.current?.contains(e.target as Node) ?? false
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const works = [
    {
      title: "English Learning Agent Website",
      image: englishLearning,
    },
    {
      title: "Vet Clinic Website",
      image: petClinic,
    },
    {
      title: "The Creator | Creative Agency",
      image: theCreator,
    },
    {
      title: "Beauty and Skincare Landing Page",
      image: beauty,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();

    const deltaX = x - lastPosRef.current.x;
    const deltaY = y - lastPosRef.current.y;
    const deltaTime = now - lastPosRef.current.time;

    const speedX = deltaX / deltaTime;
    const speedY = deltaY / deltaTime;

    const maxWobble = 15;
    setWobble({
      x: Math.max(Math.min(speedX * 100, maxWobble), -maxWobble),
      y: Math.max(Math.min(speedY * 100, maxWobble), -maxWobble),
    });

    setCursorPosition({ x, y });
    setHoveredIndex(index);
    lastPosRef.current = { x, y, time: now };
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setWobble({ x: 0, y: 0 });
  };

  return (
    <div className="works-container section" id="works" ref={containerRef}>
      {works.map((work, index) => (
        <div
          className="work-item"
          key={`${index}-${work.title}`}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="title">
            <span className="index">#{index + 1}</span> {work.title}
          </div>
          {hoveredIndex === index && (
            <div
              className="image-wrapper"
              style={{
                position: "absolute",
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transform: `translate(-50%, -50%) `,
                transition: "transform 0.1s ease, filter 0.1s ease",
                pointerEvents: "none",
                zIndex: 1000,
              }}
            >
              <img src={work.image} alt={work.title} loading="lazy" />
            </div>
          )}
        </div>
      ))}

      <div
        className="custom-cursor"
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: cursorVisibility ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.1s ease-out",
        }}
      >
        <div className="arrow-icon">
          <ArrowIcons />
        </div>
      </div>
    </div>
  );
};

export default Works;
