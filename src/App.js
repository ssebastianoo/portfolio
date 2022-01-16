import './App.css';
import SebPic from './cdn/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Box(props) {
  const style = {
    backgroundColor: props.color,
    color: '#1c1e26',
  }
  return (
    <span className="Box" style={style}>{props.text}</span>
  );
}

function Project(props) {
  return (
    <div className="Project">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="OpenProject">
      <a href={props.url} target="_blank" rel="noreferrer">open</a>
      </div>
    </div>
  )
}

function Social(props) {
 return (
   <div className="Social">
      <a href={props.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={props.icon} /></a>
   </div>
 )
}

function App() {
  return (
    <div className="App">
      <div className="Info">
        <div className="SebPic">
          <img src={SebPic} alt="seb"/>
        </div>
        <div className="InfoText">
          <h2>im seb</h2>
          <p><Box color="#f7e018" text="javascript"/> && <Box color="#3474a7" text="python"/> developer</p>
        </div>
      </div>
      <div className="Socials">
        <Social url="https://twitter.com/ssebastianoo" icon={faTwitter} />
        <Social url="https://github.com/ssebastianoo" icon={faGithub} />
      </div>
      <h1 style={{textAlign: 'center', margin: "50px"}}>projects</h1>
      <div className="Projects">
        <Project title="guess the element" description="guess the random element from the periodic table" url="https://seba.gq/GuessTheElement" />
        <Project title="cookie fighter" description="catch the cookies on discord" url="https://cookie-is.the-be.st/"/>
        <Project title="ram monitor" description="webapp to monitor your ram usage" url="https://github.com/ToastEnergy/RamMonitor"/>
      </div>
    </div>
  );
}

export default App;
