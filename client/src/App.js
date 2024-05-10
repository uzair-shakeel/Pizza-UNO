import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Feedback from "./pages/feedback.js";
import ContactUsPage from "./pages/contactus.js";

function App() {
  return (
    <>
      <div className="bg-yellow-100">
        <Navbar />
        {/* <TopNavbar /> */}
        <div className="max-w-[1200px] w-full mx-auto px-[10px]  ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
