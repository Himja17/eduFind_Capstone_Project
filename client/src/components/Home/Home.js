import videoBanner from "../../assets/Video/studyVideo.mp4";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="main">
      <div className="main__video-overlay"></div>
      <div className="main__video-container">
        <video src={videoBanner} autoPlay loop muted className="main__video" />
      </div>
      <div className="main__banner-content">
        <h1>Navigate Knowledge, Discover Education</h1>
      </div>
      <div className="main__login">
        <Link to="/register">
          <button className="main__login--bttn">Register</button>
        </Link>

        <Link to="/login">
          <button className="main__login--bttn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

