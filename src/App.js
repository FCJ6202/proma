import './App.css';
import Navbar from './Components/Navbar';
import MainCard from './Components/IntroPage/MainCard';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/sign-up/sign-up.components';
import ClassView from './pages/class/class.component';
import People from './Components/People/People.component';
import Classwork from './Components/Classwork/Classwork.component';
import Stream from './Components/Stream/Stream.component_mod';
import Announcement from './Components/Announcement/Announcement.componenet';
import Assignment from './Components/Assignment/Assignment.component';
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
          <Route path="home" element={<Home/>} />
          <Route path="class/:classId" element={<ClassView/>}>
              <Route path = "/class/:classId/people" element = {<People/>} />
              <Route path = "/class/:classId/classwork" element = {<Classwork/>} />
              <Route path = "/class/:classId/stream" element = {<Stream/>} >
              <Route path="/class/:classId/stream/:postId/assignment" element={<Assignment/>}/>
              </Route>
          </Route>
          <Route path="*" element={<div style={myInlineStyle}>404 Page not found😶</div>} />

      </Routes>
    
    </>
  );
}

export default App;