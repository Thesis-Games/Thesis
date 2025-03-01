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
import Html6 from "./gamelevelhtml/Html6"
import Html7 from "./gamelevelhtml/Html7";
import Html8 from "./gamelevelhtml/Html8";
import Html9 from "./gamelevelhtml/Html9";
import Html10 from "./gamelevelhtml/Html10";
import Html11 from "./gamelevelhtml/Html11";
import Html12 from "./gamelevelhtml/Html12";
import Html13 from "./gamelevelhtml/Html13";
import Html14 from "./gamelevelhtml/Html14";
import Html15 from "./gamelevelhtml/Html15";
import Html16 from "./gamelevelhtml/Html16";
import Html17 from "./gamelevelhtml/Html17";
import Html18 from "./gamelevelhtml/Html18";
import Html19 from "./gamelevelhtml/Html19";
import Html20 from "./gamelevelhtml/Html20";
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
import Q6HTML from "./QuestionGame/Q6HTML";
import Q7HTML from "./QuestionGame/Q7HTML";
import Q8HTML from "./QuestionGame/Q8HTML";
import Q9HTML from "./QuestionGame/Q9HTML";
import Q10HTML from "./QuestionGame/Q10HTML";
import Q11HTML from "./QuestionGame/Q11HTML";
import Q12HTML from "./QuestionGame/Q12HTML";
import Q13HTML from "./QuestionGame/Q13HTML";
import Q14HTML from "./QuestionGame/Q14HTML";
import Q15HTML from "./QuestionGame/Q15HTML";
import Q16HTML from "./QuestionGame/Q16HTML";
import Q17HTML from "./QuestionGame/Q17HTML";
import Q18HTML from "./QuestionGame/Q18HTML";
import Q19HTML from "./QuestionGame/Q19HTML";
import Q20HTML from "./QuestionGame/Q20HTML";
import Q21HTML from "./QuestionGame/Q21HTML";
import Q22HTML from "./QuestionGame/Q22HTML";
import Q23HTML from "./QuestionGame/Q23HTML";
import Q24HTML from "./QuestionGame/Q24HTML";
import Q25HTML from "./QuestionGame/Q25HTML";

// Css Defenition  / introduction
import Csslvl1 from "./cssdefenition/Csslvl1";
import Csslvl2 from "./cssdefenition/Csslvl2";
import Csslvl3 from "./cssdefenition/Csslvl3";
import Csslvl4 from "./cssdefenition/Csslvl4";
import Csslvl5 from "./cssdefenition/Csslvl5";
import Csslvl6 from "./cssdefenition/Csslvl6";
import Csslvl7 from "./cssdefenition/Csslvl7";
import Csslvl8 from "./cssdefenition/Csslvl8";
import Csslvl9 from "./cssdefenition/Csslvl9";
import Csslvl10 from "./cssdefenition/Csslvl10";
// Css Games / game
import Cssq1 from "./cssquiz/Cssq1";
import Cssq2 from "./cssquiz/Cssq2";
import Cssq3 from "./cssquiz/Cssq3";
import Cssq4 from "./cssquiz/Cssq4";
import Cssq5 from "./cssquiz/Cssq5";
import Cssq6 from "./cssquiz/Cssq6";
import Cssq7 from "./cssquiz/Cssq7";
import Cssq8 from "./cssquiz/Cssq8";
import Cssq9 from "./cssquiz/Cssq9";
import Cssq10 from "./cssquiz/Cssq10";
// Css Defenition  / introduction
import Jslvl1 from "./Jsdefenition/Jslvl1";
import Jslvl2 from "./Jsdefenition/Jslvl2";
import Jslvl3 from "./Jsdefenition/Jslvl3";
import Jslvl4 from "./Jsdefenition/Jslvl4";
import Jslvl5 from "./Jsdefenition/Jslvl5";
import Jslvl6 from "./Jsdefenition/Jslvl6";
import Jslvl7 from "./Jsdefenition/Jslvl7";
import Jslvl8 from "./Jsdefenition/Jslvl8";
import Jslvl9 from "./Jsdefenition/Jslvl9";
import Jslvl10 from "./Jsdefenition/Jslvl10";

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
          <Route path="/introduction" element={<Html20/>} />
          <Route path="/game" element={<Q20HTML/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
