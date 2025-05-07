import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Homegame from "./gameusers/Homegame";
import Leaderboards from "../src/gameusers/Leaderboards";
import Languagepick from "./gameusers/Languagepick";
import Home from "./gameusers/Home";
import Csslevel from "./gameusers/Csslevel";
import Jslevel from "./gameusers/Jslevel";
import ResetPassword from "./component/reset-password";
//starlevel
import Star1 from "./Starcomp/Star1";
import Star2 from "./Starcomp/Star2";
import Star3 from "./Starcomp/Star3";

//lossgame
import Lossgame from "./Starcomp/Lossgame";

//Music Setting
import Music from "../src/musicsetting/Musicsetting";

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
import Csslvl11 from "./cssdefenition/Csslvl11";
import Csslvl12 from "./cssdefenition/Csslvl12";
import Csslvl13 from "./cssdefenition/Csslvl13";
import Csslvl14 from "./cssdefenition/Csslvl14";
import Csslvl15 from "./cssdefenition/Csslvl15";
import Csslvl16 from "./cssdefenition/Csslvl16";
import Csslvl17 from "./cssdefenition/Csslvl17";
import Csslvl18 from "./cssdefenition/Csslvl18";
import Csslvl19 from "./cssdefenition/Csslvl19";
import Csslvl20 from "./cssdefenition/Csslvl20";
import Csslvl21 from "./cssdefenition/Csslvl21";
import Csslvl22 from "./cssdefenition/Csslvl22";
import Csslvl23 from "./cssdefenition/Csslvl23";
import Csslvl24 from "./cssdefenition/Csslvl24";
import Csslvl25 from "./cssdefenition/Csslvl25";

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
import Cssq11 from "./cssquiz/Cssq11";
import Cssq12 from "./cssquiz/Cssq12";
import Cssq13 from "./cssquiz/Cssq13";
import Cssq14 from "./cssquiz/Cssq14";
import Cssq15 from "./cssquiz/Cssq15";
import Cssq16 from "./cssquiz/Cssq16";
import Cssq17 from "./cssquiz/Cssq17";
import Cssq18 from "./cssquiz/Cssq18";
import Cssq19 from "./cssquiz/Cssq19";
import Cssq20 from "./cssquiz/Cssq20";
import Cssq21 from "./cssquiz/Cssq21";
import Cssq22 from "./cssquiz/Cssq22";
import Cssq23 from "./cssquiz/Cssq23";
import Cssq24 from "./cssquiz/Cssq24";

// Js Defenition  / introduction
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
import Jslvl11 from "./Jsdefenition/Jslvl11";
import Jslvl12 from "./Jsdefenition/Jslvl12";
import Jslvl13 from "./Jsdefenition/Jslvl13";
import Jslvl14 from "./Jsdefenition/Jslvl14";
import Jslvl15 from "./Jsdefenition/Jslvl15";
import Jslvl16 from "./Jsdefenition/Jslvl16";
import Jslvl17 from "./Jsdefenition/Jslvl17";
import Jslvl18 from "./Jsdefenition/Jslvl18";
import Jslvl19 from "./Jsdefenition/Jslvl19";
import Jslvl20 from "./Jsdefenition/Jslvl20";
import Jslvl21 from "./Jsdefenition/Jslvl21";
import Jslvl22 from "./Jsdefenition/Jslvl22";
import Jslvl23 from "./Jsdefenition/Jslvl23";
import Jslvl24 from "./Jsdefenition/Jslvl24";
import Jslvl25 from "./Jsdefenition/Jslvl25";

// Js Games / game
import Jsq1 from "./Jsquiz/Jsq1";
import Jsq2 from "./Jsquiz/Jsq2";
import Jsq3 from "./Jsquiz/Jsq3";
import Jsq4 from "./Jsquiz/Jsq4";
import Jsq5 from "./Jsquiz/Jsq5";
import Jsq6 from "./Jsquiz/Jsq6";
import Jsq7 from "./Jsquiz/Jsq7";
import Jsq8 from "./Jsquiz/Jsq8";
import Jsq9 from "./Jsquiz/Jsq9";
import Jsq10 from "./Jsquiz/Jsq10";
import Jsq11 from "./Jsquiz/Jsq11";
import Jsq12 from "./Jsquiz/Jsq12";
import Jsq13 from "./Jsquiz/Jsq13";
import Jsq14 from "./Jsquiz/Jsq14";
import Jsq15 from "./Jsquiz/Jsq15";
import Jsq16 from "./Jsquiz/Jsq16";
import Jsq17 from "./Jsquiz/Jsq17";
import Jsq18 from "./Jsquiz/Jsq18";
import Jsq19 from "./Jsquiz/Jsq19";
import Jsq20 from "./Jsquiz/Jsq20";
import Jsq21 from "./Jsquiz/Jsq21";
import Jsq22 from "./Jsquiz/Jsq22";
import Jsq23 from "./Jsquiz/Jsq23";
import Jsq24 from "./Jsquiz/Jsq24";
import Jsq25 from "./Jsquiz/Jsq25";

// Signup/Signin User
import Signup from "./component/Signup";
import Recover from "./component/Recover";
import Musicsetting from "../src/musicsetting/Musicsetting";

//html
import HtmlQuestion from "./pages/html-question";
import CssQuestion from "./pages/css-question";
import JsQuestion from "./pages/js-question";
import Lessonpage from "./pages/lesson-page";
import VerifyAccount from "./pages/verify-account-verify";
import SettingsPage from "./pages/setting";
import ProtectedRoute from "./component/protected-route";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Authentication Routes */}
          <Route index element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/page/reset-password/:id" element={<ResetPassword />} />
          <Route
            path="/page/verify-account/:token"
            element={<VerifyAccount />}
          />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Homegame />} />
            <Route path="/home/languagepick" element={<Languagepick />} />
            <Route path="/languagepick/start" element={<Home />} />
            <Route path="/languagepick/csslevel" element={<Csslevel />} />
            <Route path="/languagepick/jslevel" element={<Jslevel />} />
            <Route path="/leaderboard" element={<Leaderboards />} />
            <Route path="/musicsetting" element={<Musicsetting />} />
            <Route path="/lesson" element={<Lessonpage />} />
            <Route path="/settings" element={<SettingsPage />} />

            <Route
              path="/questions/html/:category/:level"
              element={<HtmlQuestion />}
            />
            <Route
              path="/questions/css/:category/:level"
              element={<CssQuestion />}
            />
            <Route
              path="/questions/js/:category/:level"
              element={<JsQuestion />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
