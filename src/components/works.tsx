import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowIcons } from "../assets/svg/exportSVG";

const Works = () => {
  const works = [
    {
      title: "English Learning Agent Website",
      description:
        "A modern web platform to help users improve their English skills using AI-powered agents.",
      image: "english-learning.jpg",
    },
    {
      title: "Vet Clinic Website",
      description:
        "A responsive website designed for veterinary clinics to manage appointments and showcase services.",
      image: "vet-clinic.jpg",
    },
    {
      title: "Beauty and Skincare Landing Page",
      description:
        "An elegant landing page for a beauty brand, optimized for conversions and product showcase.",
      image: "beauty-skincare.jpg",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [cursorVisibility, setCursorVisibility] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateOverflowState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isOverflow = container.scrollWidth > container.clientWidth;
    setIsOverflowing(isOverflow);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial calculation after the DOM has been rendered
    const observer = new ResizeObserver(updateOverflowState);
    observer.observe(container);

    // Update on scroll
    const handleScroll = () => updateOverflowState();
    container.addEventListener("scroll", handleScroll);

    // Add mouse wheel listener for horizontal scrolling
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        container.scrollBy({
          left: event.deltaY * 2,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    // Initial check
    updateOverflowState();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [updateOverflowState]);

  // Mouse move effect for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      className="works-container section"
      id="works"
      onPointerEnter={() => setCursorVisibility(true)}
      onPointerLeave={() => setCursorVisibility(false)}
    >
      <div className="work-hero">My Playground</div>
      <div
        className={`works-container-wrapper ${
          isOverflowing ? "overflowing" : ""
        }`}
        ref={scrollContainerRef}
      >
        {works.map((work, index) => (
          <div className="works-wrapper" key={`${index}_${work.title}`}>
            <div className="title">{work.title}</div>
            <div className="description">{work.description}</div>
            <div className="images">
              <img src={work.image} alt={work.title} />
            </div>
          </div>
        ))}
      </div>

      {cursorVisibility && (
        <div
          className="custom-cursor"
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <div className="arrow-icon">
            <ArrowIcons />
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
