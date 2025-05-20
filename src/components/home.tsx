import avatar from '../assets/images/Avatar.png'
import { HeroUnderLine } from '../assets/svg/exportSVG'
const Home = () => {
  return (
    <div className='home-container section'>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="owner-details">
        Hi. I’m Nalvazhuthi.
        <div className="sub"> A Web developer.</div>
      </div>
      <div className="svg"><HeroUnderLine /></div>
    </div>
  )
}

export default Home

