import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className='body'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
