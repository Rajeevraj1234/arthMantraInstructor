import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import InsructorDetail from "./Pages/InstructorDetail";
import Signin from "./Pages/Signin";
import Courses from "./Pages/Courses";
import SoldCourses from "./Pages/SoldCourses";
import UploadCourse from "./Pages/UploadCourse";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructor-detail" element={<InsructorDetail />} />
        <Route path="/soldcourse" element={<SoldCourses />} />
        <Route path="/uploadcourse" element={<UploadCourse />} />
      </Routes>
    </>
  );
}
export default App;
