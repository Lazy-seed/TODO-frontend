import './App.css';
import Login from './components/Login/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (


    <BrowserRouter>
      <div className="App">



        <Navbar />

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />


        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
