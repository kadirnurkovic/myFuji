import "./About.css";
import Tarikimg from '../../img/Tarik.png'
import Farisimg from '../../img/Faris.png'
import Ademimg from '../../img/Adem.png'
import Amirimg from '../../img/Amir.png'

function About() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://avatars.githubusercontent.com/u/100434447?v=4"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Kadir Nurkovic</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul className="uList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img src={Tarikimg} alt="" className="profile-picture" />
        <div className="info-container">
          <span className="name">Tarik Ibrahimovic</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src={Farisimg}
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Faris Coric</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src={Amirimg}
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Amir Ukic</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src={Ademimg}
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Adem Ugljanin</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Lorem, ipsum dolor. Lorem, ipsum dolor.
          </span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
