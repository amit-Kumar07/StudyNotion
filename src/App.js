import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isLogedin, setIsLogedIn] = useState(false);
  return <div className="w-screen h-screen flex flex-col bg-richblack-900">
    <Navbar isLogedin={isLogedin} setIsLogedIn={setIsLogedIn}/>


    <Routes>
      <Route path="/" element={<Home isLogedin={isLogedin}/>} />
      <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn}/>} />
      <Route path="/signup" element={<Signup setIsLogedIn={setIsLogedIn}/>}/>
      <Route path="/dashboard" element={
      <PrivateRoute isLogedin={isLogedin}>
           <Dashboard/>
      </PrivateRoute>
      }/>
    </Routes>
  </div>;
}

export default App;
