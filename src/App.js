import './App.css';
import './Style.css';
import img from './imageInSrc.jpg'

function App() {
  return (
  <>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">Mohamed Taieb Bouteraa</h1>
      <br />
      <img src={img} alt="img1" />
      <br />
      <img src="./imageInPublic.jpg" alt="img2"/>
    </div>
    <video width="320" height="240" controls >
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </>
  );
}

export default App;
