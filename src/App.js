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
import Profile from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// update infos
import UpdateBlogCard from "./Pages/UpdateInfos/HomePageUpdate/UpdateBlogCard/UpdateBlogCard";
import UpdateCourseInfoCard1 from "./Pages/UpdateInfos/HomePageUpdate/UpdateCourseInfoCard1/UpdateCourseInfoCard1";
import UpdateCourseInfoCard2 from "./Pages/UpdateInfos/HomePageUpdate/UpdateCourseInfoCard2/UpdateCourseInfoCard2";
import UpdateCssDemoVideo from "./Pages/UpdateInfos/HomePageUpdate/UpdateCssDemoVideo/UpdateCssDemoVideo";
import UpdateHtmlDemoVideo from "./Pages/UpdateInfos/HomePageUpdate/UpdateHtmlDemoVideo/UpdateHtmlDemoVideo";
// AddInfos
import AddInfosBlogCard from "./Pages/AddInfos/HomePageAddInfos/AddInfosBlogCard/AddInfosBlogCard";
import AddInfosCourseInfoCard1 from "./Pages/AddInfos/HomePageAddInfos/AddInfosCourseInfoCard1/AddInfosCourseInfoCard1";
import AddInfosCourseInfoCard2 from "./Pages/AddInfos/HomePageAddInfos/AddInfosCourseInfoCard2/AddInfosCourseInfoCard2";
import AddInfosCssDemoVideo from "./Pages/AddInfos/HomePageAddInfos/AddInfosCssDemoVideo/AddInfosCssDemoVideo";
import AddInfosHtmlDemoVideo from "./Pages/AddInfos/HomePageAddInfos/AddInfosHtmlDemoVideo/AddInfosHtmlDemoVideo";

function App() {

  return (
    <BrowserRouter>

    <div className="App">

      <NavBar></NavBar>
      <Routes>
        {/* AddInfos */}
        <Route path="/AddInfosHtmlDemoVideo" element={<AddInfosHtmlDemoVideo />} />
        <Route path="/AddInfosCssDemoVideo" element={<AddInfosCssDemoVideo />} />
        <Route path="/AddInfosCourseInfoCard2" element={<AddInfosCourseInfoCard2 />} />
        <Route path="/AddInfosCourseInfoCard1" element={<AddInfosCourseInfoCard1 />} />
        <Route path="/AddInfosBlogCard" element={<AddInfosBlogCard />} />

        {/* update infos */}
        <Route path="/UpdateHtmlDemoVideo/:id" element={<UpdateHtmlDemoVideo />} />
        <Route path="/UpdateCssDemoVideo/:id" element={<UpdateCssDemoVideo />} />
        <Route path="/UpdateCourseInfoCard2/:id" element={<UpdateCourseInfoCard2 />} />
        <Route path="/UpdateCourseInfoCard1/:id" element={<UpdateCourseInfoCard1 />} />
        <Route path="/UpdateBlogCard/:id" element={<UpdateBlogCard />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
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