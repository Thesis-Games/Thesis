import React from "react";
import background from "../picture/background.png";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import { signinFormSchema } from "../validation/signin-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInHook from "../hook/signin-hook";
export default function Signin() {
  const { handleSignIn, loading } = SignInHook();
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
        backgroundSize: "cover", // Makes the image cover the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <FormLayoutComponent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-7 items-center  font-mono "
        >
          <div>
            <TitleComponent title={"Sign In"} />
          </div>

          <input
            {...register("email")}
            placeholder="Email"
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("password")}
            placeholder="Password"
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </form>
        <Link to="/recover">
          <div className="text-[#1d1b1b] cursor-pointer font-bold hover:text-[#dbdbdb] mt-9 text-sm   ">
            <div className="">
              <p>Cant Sign In?</p>
            </div>
          </div>
        </Link>
        <Link to="/Signup">
          <div className=" text-center text-[#1d1b1b] cursor-pointer font-bold hover:text-[#dbdbdb] mt-1 text-sm ">
            <div>
              <p>Create Account</p>
            </div>
          </div>
        </Link>
        <div>
          <ButtonComponent handleSignIn={handleSubmit(onSubmit)} />
        </div>
      </FormLayoutComponent>
    </div>
  );
}
