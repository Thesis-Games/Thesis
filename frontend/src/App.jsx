import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Homegame from "./gameusers/Homegame";
import Leaderboards from "../src/gameusers/Leaderboards";
import Languagepick from "./gameusers/Languagepick";
import Home from "./gameusers/Home";
import Csslevel from "./gameusers/Csslevel";

// Html Defenition
import Html1 from "./gamelevelhtml/Html1";
import Html2 from "./gamelevelhtml/Html2";
import Html3 from "./gamelevelhtml/Html3";
import Html4 from "./gamelevelhtml/Html4";
import Html5 from "./gamelevelhtml/Html5";
import Html11 from "./gamelevelhtml/Html11";
import Html12 from "./gamelevelhtml/Html12";
import Html13 from "./gamelevelhtml/Html13";
import Html14 from "./gamelevelhtml/Html14";
import Html15 from "./gamelevelhtml/Html15";
import Html21 from "./gamelevelhtml/Html21";
import Html22 from "./gamelevelhtml/Html22";
import Html23 from "./gamelevelhtml/Html23";
import Html24 from "./gamelevelhtml/Html24";
import Html25 from "./gamelevelhtml/Html25";

// Html Quiz
import Q1HTML from "./QuestionGame/Q1HTML";
import Q2HTML from "./QuestionGame/Q2HTML";
import Q3HTML from "./QuestionGame/Q3HTML";
import Q4HTML from "./QuestionGame/Q4HTML";
import Q5HTML from "./QuestionGame/Q5HTML";
import Q11HTML from "./QuestionGame/Q11HTML";
import Q12HTML from "./QuestionGame/Q12HTML";
import Q13HTML from "./QuestionGame/Q13HTML";
import Q14HTML from "./QuestionGame/Q14HTML";
import Q15HTML from "./QuestionGame/Q15HTML";
import Q21HTML from "./QuestionGame/Q21HTML";
import Q22HTML from "./QuestionGame/Q22HTML";
import Q23HTML from "./QuestionGame/Q23HTML";
import Q24HTML from "./QuestionGame/Q24HTML";
import Q25HTML from "./QuestionGame/Q25HTML";

// Css Defenition
import Csslvl1 from "./cssdefenition/Csslvl1";
import Csslvl2 from "./cssdefenition/Csslvl2";
import Csslvl3 from "./cssdefenition/Csslvl3";
import Csslvl4 from "./cssdefenition/Csslvl4";
import Csslvl5 from "./cssdefenition/Csslvl5";

// Css Defenition
import Cssq1 from "./cssquiz/Cssq1";
import Cssq2 from "./cssquiz/Cssq2";
import Cssq3 from "./cssquiz/Cssq3";
import Cssq4 from "./cssquiz/Cssq4";

// Signup/Signin User
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
          <Route path="/home/languagepick" element={<Languagepick />} />
          <Route path="/languagepick/start" element={<Home />} />
          <Route path="/languagepick/csslevel" element={<Csslevel />} />
          <Route path="/leaderboard" element={<Leaderboards />} />
          <Route path="/introduction" element={<Csslvl1 />} />
          <Route path="/game" element={<Cssq4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
