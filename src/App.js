// import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Tools from './Components/Tools';
import Formations from './Components/Formations';

function App() {
  return (
    <div className="App ">
      <div className='container-sections container'>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tools' element={<Tools />}/>
          <Route path='/formations' element={<Formations/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
