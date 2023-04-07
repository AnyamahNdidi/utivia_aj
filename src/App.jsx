import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import School from './pages/Schools/School';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/school" element={ <School/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
