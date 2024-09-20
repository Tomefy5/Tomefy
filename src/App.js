import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ProfilDescri from './Components/ProfilDescri';

function App() {
  return (
    <div className="App ">
      <div className='container-sections container'>
        <NavBar />
        <ProfilDescri/>
      </div>
    </div>
  );
}

export default App;
