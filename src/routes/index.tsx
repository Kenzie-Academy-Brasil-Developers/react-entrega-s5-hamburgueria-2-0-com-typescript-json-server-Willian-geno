import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Router;
