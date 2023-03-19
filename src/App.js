import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Cocktails } from './pages/Cocktails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Cocktails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;