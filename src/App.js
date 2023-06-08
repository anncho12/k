import MainPage from "./route/main";
import LoginPage from "./route/login";
import ResumePage from "./route/resume";
import AipassPage from "./route/aipass";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./route/home";
import CareerPage from "./route/career";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/aipass" element={<AipassPage/>}/>
          <Route path="/career" element={<CareerPage/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
