import './App.css';
import Navbar from './Components/Navbar';
import MainCard from './Components/IntroPage/MainCard';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Navbar/>
      {/* <MainCard/> */}
      <Home/>
      <Footer/>
    </>
  );
}

export default App;