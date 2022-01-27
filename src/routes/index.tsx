import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Dashboard from "../pages/dashboard";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> 

      </Routes>
    </>
  );
};

export default Router;
