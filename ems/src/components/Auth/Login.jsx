import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500  px-4">
      <div className="bg-gray-300 border border-gray-300 rounded-2xl w-full max-w-md sm:px-8 lg:max-w-lg shadow-md">
        <form
          className="flex flex-col gap-6 p-5 sm:p-8 lg:p-10 justify-center items-center text-gray-600"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            required
            placeholder="Enter your email..."
            className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-2xl border-2 border-gray-300 text-lg sm:text-xl bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-teal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Type your password..."
            className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-2xl border-2 border-gray-300 text-lg sm:text-xl bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-teal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-pastel-teal hover:bg-pastel-mint border-2 border-gray-500 text-lg sm:text-xl py-2 sm:py-3 font-medium rounded-2xl text-gray-700 transition-all duration-300">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

