import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import Button from "./Button";
import Input from "./Input";
import AuthService from "../appwrite/AuthService";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../appwrite/AuthService";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [Errors, setErrors] = useState("");

  const signupHandler = async (data) => {
    setErrors("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 backdrop-blur-sm">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Join us to get started with your journey
            </p>
          </div>

          {/* Error Message */}
          {Errors && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-red-700 text-sm font-medium text-center">
                {Errors}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(signupHandler)}>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl"
              {...register("fullname")}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl"
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter you Password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="bg-green-500 text-black">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
