import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Implement login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    // Implement forgot password logic here
  };
  return (
    <div className='w-full mx-auto bg-white p-8'>
        <h2 className="text-2xl font-semibold mb-6 text-[#19a140]">Login Form</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-medium text-gray-600 mb-1">Email Address:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#19a140]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-base font-medium text-gray-600 mb-1">Password:</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#19a140]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember Me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#19a13fe5] text-white py-2 rounded-md hover:bg-[#19a140] transition-colors duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-[#19a13feb] hover:text-[#19a140] focus:outline-none mr-2"
            >
              Forgot Password?
            </button>
          </div>
    </div>
  )
}

export default LoginForm