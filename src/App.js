import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Pages/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import About from "./Pages/About/About";
import Courses from "./Pages/Courses/Courses";
import Footer from "./Pages/Footer/Footer";
import PaymentPage from "./Pages/PaymentPage/PaymentPage" ;
import CoursesCardPage from "./Pages/CoursesCardPage/CoursesCardPage";
import Video from "./Pages/Video/Video" ;
import Register from "./Pages/Register/Register" ; 
import Login from "./Pages/Login/Login" ; 

function App() {

  return (
    <BrowserRouter>

    <div className="App">

      <NavBar></NavBar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video" element={<Video />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/coursesCardPage" element={<CoursesCardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      
      <Footer></Footer>
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;