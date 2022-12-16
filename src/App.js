import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />   
      </Routes>
    </>
  );
}

export default App;
