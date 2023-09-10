import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import ProtecdRoute from "./components/protecdRoute";
import { useSelector } from "react-redux";
import LoaderComp from "./loaders";
import ProtCheck from "./components/protCheck";
import Applications from "./pages/Appications";
import Capstone from "./pages/Capstone/Capstone";
import Certificate from "./pages/Certificate/Certificate";
import DashBoard from "./pages/Dashboard/dashBoard";
import Interview from "./pages/Interview/interview";
import Leaderboard from "./pages/LeaderBoard/leaderboard";
import Leave from "./pages/Leave/Leave";
import MockInterview from "./pages/Mockinterview/mockInterview";
import Placement from "./pages/Placement/placement";
import Portfoilio from "./pages/Portfoilio/portfoilio";
import Queries from "./pages/Queries/Queries";
import Requirements from "./pages/Requirements/requirements";
import syllabus from "./pages/Syllabus/syllabus";
import Tasks from "./pages/Tasks/tasks";
import Testimonial from "./pages/Testimonial/testimonial";
import Webcode from "./pages/Webcode/Webcode";
import Goto from "./components/Goto";
import Syllabus from "./pages/Syllabus/syllabus";

function App1() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div>
      {loading && (
        <div className="loaderparent">
          <div className="loader">
            <LoaderComp />
          </div>
        </div>
      )}
      <BrowserRouter>
        <ProtecdRoute />
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Goto />} />
          <Route path="/class" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/interview-tasks" element={<Interview />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/mockinterview" element={<MockInterview />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/portfolio" element={<Portfoilio />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App1;
