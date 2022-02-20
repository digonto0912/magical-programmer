import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateRoute from './Pages/hooks/PrivateRoute';
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
// AddInfos
// home
import AddInfosBlogCard from "./Pages/AddInfos/HomePageAddInfos/AddInfosBlogCard/AddInfosBlogCard";
import AddInfosCourseInfoCard1 from "./Pages/AddInfos/HomePageAddInfos/AddInfosCourseInfoCard1/AddInfosCourseInfoCard1";
import AddInfosCourseInfoCard2 from "./Pages/AddInfos/HomePageAddInfos/AddInfosCourseInfoCard2/AddInfosCourseInfoCard2";
import AddInfosCssDemoVideo from "./Pages/AddInfos/HomePageAddInfos/AddInfosCssDemoVideo/AddInfosCssDemoVideo";
import AddInfosHtmlDemoVideo from "./Pages/AddInfos/HomePageAddInfos/AddInfosHtmlDemoVideo/AddInfosHtmlDemoVideo";
//course
import AddInfosCIC3Card1stApi from "./Pages/AddInfos/CoursePageAddInfos/AddInfosCIC3Card1stApi/AddInfosCIC3Card1stApi";
import AddInfosCIC3Card2ndApi from "./Pages/AddInfos/CoursePageAddInfos/AddInfosCIC3Card2ndApi/AddInfosCIC3Card2ndApi";
import AddInfosCIC3Card3rdApi from "./Pages/AddInfos/CoursePageAddInfos/AddInfosCIC3Card3rdApi/AddInfosCIC3Card3rdApi";
// payment system
import AddInfosPaymentSystemRules from "./Pages/AddInfos/PaymentSystemRulesAddInfos/AddInfosPaymentSystemRules";
//video list
import AddInfosVideoListData from "./Pages/AddInfos/AddInfosVideoListData/AddInfosVideoListData";

// update infos
// home
import UpdateBlogCard from "./Pages/UpdateInfos/HomePageUpdate/UpdateBlogCard/UpdateBlogCard";
import UpdateCourseInfoCard1 from "./Pages/UpdateInfos/HomePageUpdate/UpdateCourseInfoCard1/UpdateCourseInfoCard1";
import UpdateCourseInfoCard2 from "./Pages/UpdateInfos/HomePageUpdate/UpdateCourseInfoCard2/UpdateCourseInfoCard2";
import UpdateCssDemoVideo from "./Pages/UpdateInfos/HomePageUpdate/UpdateCssDemoVideo/UpdateCssDemoVideo";
import UpdateHtmlDemoVideo from "./Pages/UpdateInfos/HomePageUpdate/UpdateHtmlDemoVideo/UpdateHtmlDemoVideo";
//course
import UpdateCIC3Card1stApi from "./Pages/UpdateInfos/UpdateCoursePage/UpdateCIC3Card1stApi/UpdateCIC3Card1stApi";
import UpdateCIC3Card2ndApi from "./Pages/UpdateInfos/UpdateCoursePage/UpdateCIC3Card2ndApi/UpdateCIC3Card2ndApi";
import UpdateCIC3Card3rdApi from "./Pages/UpdateInfos/UpdateCoursePage/UpdateCIC3Card3rdApi/UpdateCIC3Card3rdApi";
// payment system
import UpdatePaymentSystemRules from "./Pages/UpdateInfos/UpdatePaymentSystemRules/UpdatePaymentSystemRules";
//video list
import UpdateVideoListData from "./Pages/UpdateInfos/UpdateVideoListData/UpdateVideoListData";


function App() {
  
  return (
    <BrowserRouter>

    <div className="App">

      <NavBar></NavBar>
      <Routes>
        {/* Add Infos start */}
        {/* home */}
        <Route path="/AddInfosHtmlDemoVideo" element={<AddInfosHtmlDemoVideo />} />
        <Route path="/AddInfosCssDemoVideo" element={<AddInfosCssDemoVideo />} />
        <Route path="/AddInfosCourseInfoCard2" element={<AddInfosCourseInfoCard2 />} />
        <Route path="/AddInfosCourseInfoCard1" element={<AddInfosCourseInfoCard1 />} />
        <Route path="/AddInfosBlogCard" element={<AddInfosBlogCard />} />
        {/* course */}
        <Route path="/AddInfosCIC3Card1stApi" element={<AddInfosCIC3Card1stApi />} />
        <Route path="/AddInfosCIC3Card2ndApi" element={<AddInfosCIC3Card2ndApi />} />
        <Route path="/AddInfosCIC3Card3rdApi" element={<AddInfosCIC3Card3rdApi />} />
        {/* payment system */}
        <Route path="/PaymentSystemRulesAddInfos" element={<AddInfosPaymentSystemRules />} />
        {/* video list */}
        <Route path="/VideoListAddInfos" element={<AddInfosVideoListData />} />
        {/* Add Infos end */}

        {/* update infos start */}
        {/* home */}
        <Route path="/UpdateHtmlDemoVideo/:id" element={<UpdateHtmlDemoVideo />} />
        <Route path="/UpdateCssDemoVideo/:id" element={<UpdateCssDemoVideo />} />
        <Route path="/UpdateCourseInfoCard2/:id" element={<UpdateCourseInfoCard2 />} />
        <Route path="/UpdateCourseInfoCard1/:id" element={<UpdateCourseInfoCard1 />} />
        <Route path="/UpdateBlogCard/:id" element={<UpdateBlogCard />} />
        {/* course */}
        <Route path="/UpdateCIC3Card1stApi/:id" element={<UpdateCIC3Card1stApi />} />
        <Route path="/UpdateCIC3Card2ndApi/:id" element={<UpdateCIC3Card2ndApi />} />
        <Route path="/UpdateCIC3Card3rdApi/:id" element={<UpdateCIC3Card3rdApi />} />
        {/* payment system */}
        <Route path="/UpdatePaymentSystemRules/:id" element={<UpdatePaymentSystemRules />} />
        {/* video list */}
        <Route path="/UpdateVideoList/:id" element={<UpdateVideoListData />} />
        {/* update infos end */}
        
        {/* Utilites */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video" element={<Video />} />
        <Route path="/paymentPage"
        element={
        <PrivateRoute>
          <PaymentPage />
        </PrivateRoute>
        } />
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