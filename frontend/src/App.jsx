import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Homegame from "./gameusers/Homegame";
import Home from "./gameusers/Home";
import Leaderboards from "../src/gameusers/Leaderboards";
import Html1 from "./gamelevelhtml/Html1";
import Q1HTML from "./QuestionGame/Q1HTML";
import Html2 from "./gamelevelhtml/Html2";
import Q2HTML from "./QuestionGame/Q2HTML";
import Html3 from "./gamelevelhtml/Html3";
import Q3HTML from "./QuestionGame/Q3HTML";
import Html4 from "./gamelevelhtml/Html4";
import Q4HTML from "./QuestionGame/Q4HTML";
import Html5 from "./gamelevelhtml/Html5";
import Q5HTML from "./QuestionGame/Q5HTML";
import Q11HTML from "./QuestionGame/Q11HTML";
import Html11 from "./gamelevelhtml/Html11";
import Q12HTML from "./QuestionGame/Q12HTML";
import Html12 from "./gamelevelhtml/Html12";
import Q13HTML from "./QuestionGame/Q13HTML";
import Html13 from "./gamelevelhtml/Html13";
import Q14HTML from "./QuestionGame/Q14HTML";
import Html14 from "./gamelevelhtml/Html14";
import Q25HTML from "./QuestionGame/Q25HTML";
import Html25 from "./gamelevelhtml/Html25";

import Signup from "./component/Signup";
import Recover from "./component/Recover";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/home" element={<Homegame />} />
          <Route path="/home/start" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboards />} />
          <Route path="/introduction" element={<Html25 />} />
          <Route path="/game" element={<Q25HTML />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
