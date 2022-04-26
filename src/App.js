import './App.css';
import Navbar from './Components/Navbar';
import MainCard from './Components/IntroPage/MainCard';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import HomePage from "./pages/homepage/homepage.component.jsx"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/sign-up/sign-up.components';
const myInlineStyle={
  color:'black',
  fontSize:'40px',
  fontFamily:'Ariel',
  position:'absolute',
  top:'50%',
  left:'40%'
}

function App() {
  return (
    <>
      <Routes>

          <Route path="/" element=
          {    
          <>
            <Navbar />
            <MainCard />
            <Footer />
          </>
          } />

          <Route path="signIn" element={<SignInAndSignUpPage/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="*" element={<div style={myInlineStyle}>404 Page not found😶</div>} />
      
      </Routes>
    
    </>
  );
}

export default App;