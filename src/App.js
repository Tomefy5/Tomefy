import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ProfilDescri from './Components/ProfilDescri';
import Competencies from './Components/Competencies';

function App() {
  return (
    <div className="App ">
      <div className='container-sections container'>
        <NavBar />
        <ProfilDescri/>
        <Competencies />
      </div>
    </div>
  );
}

export default App;
