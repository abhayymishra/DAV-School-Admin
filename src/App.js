import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightContent from "./components/RightMainContent/RightContent";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      {/* <Navbar />
      <LeftPanel />
      <RightContent /> */}
      {/* <LoginForm/> */}

      {/* <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes> */}

      <Main />
    </>
  );
}

export default App;
