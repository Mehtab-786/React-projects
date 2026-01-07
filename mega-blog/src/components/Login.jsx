import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import Button from "./Button";
import Input from "./Input";
import AuthService from "../appwrite/AuthService";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [Errors, setErrors] = useState("");

  const loginHandler = async (data) => {
    setErrors("");
    try {
      const session = await AuthService.loginAccount(data);
      if (session) {
        const userData = await AuthService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error::", error);
      setErrors(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-slate-100 py-12 px-4">
      <div className="w-full max-w-md space-y-5">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Sign in to your account to continue
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
          <form onSubmit={handleSubmit(loginHandler)}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter you email"
              {...register("email", {
                required: true,
              })} //spread operator
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter you Password"
              {...register("password", {
                required: true,
              })}
            />
            <Button className="bg-green-500 text-black">Sign In</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
