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
  const [showPassword, setShowPassword] = useState(false);

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
      className="w-full h-screen relative flex items-center justify-center flex-col
       max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full
       max-xl:h-screen max-lg:h-screen max-md:h-screen max-sm:h-screen"
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
          <TitleComponent title="Sign In" />

          {/* Email */}
          <input
            {...register("email")}
            placeholder="Email"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] outline-none tracking-wide text-xl border-2 border-white shadow-lg shadow-white focus:outline-none focus:ring-2 focus:ring-[#00e5ff] max-lg:w-[80%] max-lg:mt-[60px]"
          />
          {errors.email && (
            <p className="text-red-500 max-lg:text-[17px]">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <div className="relative w-[90%] max-lg:w-[80%]">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="p-3 rounded-full bg-black text-white text-center font-bold w-full outline-none tracking-wide text-xl border-2 border-white shadow-lg shadow-white focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 max-lg:text-[17px]">
              {errors.password.message}
            </p>
          )}

          {/* Button inside form for submit */}

          {/* Links */}
          <Link to="/recover">
            <p className="text-[#413e3e] cursor-pointer font-bold hover:text-[#0e0d0d]   max-xl:text-[17px] max-lg:text-[16px] max-md:text-[14px] ">
              Can't Sign In?
            </p>
            <Link to="/Signup">
              <p className="text-[#413e3e] cursor-pointer font-bold hover:text-[#0e0d0d]  max-xl:text-[17px] max-lg:text-[16px] max-md:text-[14px]">
                Create Account
              </p>
            </Link>
          </Link>
        </form>
      </FormLayoutComponent>
      <ButtonComponent handleSignIn={handleSubmit(onSubmit)} />
    </div>
  );
}
