import avatar from "../assets/images/Avatar.png";

const Hero = () => {
  return (
    <div className="hero-container section" id="home">
      <div className="hero-section">
        <div className="content">
          Hello
          <span className="img-wrapper">
            <img src={avatar} alt="avatar"/>
          </span>
          <span className="name-wrapper">I'm Nalvazhuthi</span>
        </div>
        <div className="content">Web Developer</div>
      </div>
    </div>
  );
};

export default Hero;
