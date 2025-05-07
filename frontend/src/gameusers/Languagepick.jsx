import React from "react";
import background from "../picture/languagebg.gif";
import earth from "../picture/earthlg.gif";
import mars from "../picture/marslg.gif";
import moon from "../picture/moonlg.gif";
import javascript from "../picture/javascript.jpg";
import { Link } from "react-router-dom";
import ProfileHook from "../hook/profile-hook";
const Languagepick = () => {
  const { profile } = ProfileHook();
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center gap-20  relative">
        <Link to="/languagepick/start">
          <div
            className="w-[200px] h-[350px] rounded-xl flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
            }}
          >
            <img
              src={earth}
              alt="Mars"
              className="w-full h-full object-cover rounded-lg"
            />

            <div className=" absolute items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 256 361"
              >
                <path
                  fill="#e44d26"
                  d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
                />
                <path
                  fill="#f16529"
                  d="m128 337.95l84.417-23.403l19.86-222.49H128z"
                />
                <path
                  fill="#ebebeb"
                  d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
                />
                <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z" />
                <path
                  fill="#fff"
                  d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
                />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="/languagepick/csslevel">
          <div
            className="w-[200px] h-[350px] rounded-xl flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
            }}
          >
            <img
              src={mars}
              alt="Mars"
              className="w-full h-full object-cover rounded-lg"
            />

            <div className=" absolute items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 256 361"
              >
                <path
                  fill="#264de4"
                  d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"
                />
                <path
                  fill="#2965f1"
                  d="m212.417 314.547l19.86-222.49H128V337.95z"
                />
                <path
                  fill="#ebebeb"
                  d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"
                />
                <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                <path
                  fill="#fff"
                  d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"
                />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="/languagepick/jslevel">
          <div
            className="w-[200px] h-[350px] rounded-xl flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
            }}
          >
            <img
              src={moon}
              alt="Moon"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className=" absolute items-center ">
              <img src={javascript} alt="" className="w-[100px] h-[100px] " />
            </div>
          </div>
        </Link>
      </div>

      <Link to="/home">
        <div className="absolute top-10 left-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff10c"
              fill-rule="evenodd"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="4"
              d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div
          className=" absolute right-20 top-12 bg-[#ee7f35] rounded-lg p-2"
          style={{
            boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
          }}
        >
          <div className=" bg-black rounded-lg p-2 ">
            <div className="text-yellow-300 font-bold text-2xl font-mono tracking-normal">
              <h1>{profile?.username}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Languagepick;
