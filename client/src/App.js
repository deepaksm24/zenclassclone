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
import Tasks from "./pages/Tasks/tasks";
import Testimonial from "./pages/Testimonial/testimonial";
import Webcode from "./pages/Webcode/Webcode";
import Goto from "./components/Goto";
import Syllabus from "./pages/Syllabus/syllabus";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";

function App() {
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
        <Routes>
          <Route
            path="/"
            element={
              <ProtCheck>
                <Goto />
              </ProtCheck>
            }
          />
          <Route
            path="/class"
            element={
              <ProtecdRoute>
                <Home />
              </ProtecdRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtecdRoute>
                <DashBoard />
              </ProtecdRoute>
            }
          />
           <Route
            path="/admin"
            element={
              
              // <ProtCheck>
              <Admin />
            // </ProtCheck>
                
            }
          />
          <Route
            path="/applications"
            element={
              <ProtecdRoute>
                <Applications />
              </ProtecdRoute>
            }
          />
          <Route
            path="/capstone"
            element={
              <ProtecdRoute>
                <Capstone />
              </ProtecdRoute>
            }
          />
          <Route
            path="/certificate"
            element={
              <ProtecdRoute>
                <Certificate />
              </ProtecdRoute>
            }
          />
          <Route
            path="/interview-tasks"
            element={
              <ProtecdRoute>
                <Interview />
              </ProtecdRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtecdRoute>
                <Leaderboard />
              </ProtecdRoute>
            }
          />
          <Route
            path="/leave"
            element={
              <ProtecdRoute>
                <Leave />
              </ProtecdRoute>
            }
          />
          <Route
            path="/mockinterview"
            element={
              <ProtecdRoute>
                <MockInterview />
              </ProtecdRoute>
            }
          />
          <Route
            path="/placement"
            element={
              <ProtecdRoute>
                <Placement />
              </ProtecdRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtecdRoute>
                <Portfoilio />
              </ProtecdRoute>
            }
          />
          <Route
            path="/queries"
            element={
              <ProtecdRoute>
                <Queries />
              </ProtecdRoute>
            }
          />
          <Route
            path="/requirements"
            element={
              <ProtecdRoute>
                <Requirements />
              </ProtecdRoute>
            }
          />
          <Route
            path="/syllabus"
            element={
              <ProtecdRoute>
                <Syllabus />
              </ProtecdRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtecdRoute>
                <Tasks />
              </ProtecdRoute>
            }
          />
          <Route
            path="/testimonials"
            element={
              <ProtecdRoute>
                <Testimonial />
              </ProtecdRoute>
            }
          />
          <Route
            path="/webcode"
            element={
              <ProtecdRoute>
                <Webcode />
              </ProtecdRoute>
            }
          />
          <Route
            path="/student/profile"
            element={
              <ProtecdRoute>
                <Profile/>
              </ProtecdRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
