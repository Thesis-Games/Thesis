import React, { useState } from "react";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import { signinFormSchema } from "../validation/signin-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInHook from "../hook/signin-hook";
import background from "../picture/Front.gif";

export default function Signin() {
  const { handleSignIn, loading } = SignInHook();
  const [showPassword, setShowPassword] = useState(false); // 👈 State for toggling

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinFormSchema),
  });

  const onSubmit = (data) => {
    handleSignIn(data);
  };

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
      <FormLayoutComponent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-7 items-center font-mono"
        >
          <div>
            <TitleComponent title={"Sign In"} />
          </div>

          {/* Email Input */}
          <input
            {...register("email")}
            placeholder="Email"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] outline-none tracking-wide text-xl border-2 border-white shadow-lg shadow-white focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password Input with Toggle */}
          <div className="relative w-[90%]">
            <input
              type={showPassword ? "text" : "password"} // 👈 Toggle type
              {...register("password")}
              placeholder="Password"
              className="p-3 rounded-full bg-black text-white text-center font-bold w-full outline-none tracking-wide text-xl border-2 border-white shadow-lg shadow-white focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)} // 👈 Toggle
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </form>

        {/* Links */}
        <Link to="/recover">
          <div className="text-[#1d1b1b] cursor-pointer font-bold hover:text-[#dbdbdb] mt-9 text-sm">
            <p>Can't Sign In?</p>
          </div>
        </Link>
        <Link to="/Signup">
          <div className="text-center text-[#1d1b1b] cursor-pointer font-bold hover:text-[#dbdbdb] mt-1 text-sm">
            <p>Create Account</p>
          </div>
        </Link>
      </FormLayoutComponent>

      {/* Button */}
      <div>
        <ButtonComponent handleSignIn={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
