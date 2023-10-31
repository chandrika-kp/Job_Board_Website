import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Global/Home';
import SignUp from './components/Global/SignUp';
import Login from './components/Global/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
