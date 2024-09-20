import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ProfilDescri from './Components/ProfilDescri';
import Competencies from './Components/Competencies';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App ">
      <div className='container-sections container'>
        <NavBar />
        <ProfilDescri/>
        <Projects/>
        <Competencies />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
