const Works = () => {
  const works = [
    {
      title: "English Learning Agent Website",
      description:
        "A modern web platform to help users improve their English skills using AI-powered agents.",
      image: "english-learning.jpg", // Replace with the actual image path or URL
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

  return (
    <div className="works-container section" id="works">
      <div className="work-hero">My Playground</div>
      <div className="works-container-wrapper">
        {works.map((work, index) => (
          <div className="works-wrapper" key={index}>
            <div className="title">{work.title}</div>
            <div className="description">{work.description}</div>
            <div className="images">
              <img src={work.image} alt={work.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;


// https://codepen.io/oldskool123/pen/mdrrbyo
// reffernce