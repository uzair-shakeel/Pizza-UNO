// src/components/LoginForm.js

import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login'); // State to manage active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto  bg-white rounded border border-[#19a140] shadow-xl shadow-[#19a140] my-20">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => handleTabChange('login')}
          className={`flex-1 text-2xl  font-semibold py-4 focus:outline-none ${
            activeTab === 'login' ? 'text-[#19a140] border-b-2 border-r-2 border-[#19a140]' : 'text-black'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange('register')}
          className={`flex-1 text-2xl font-semibold px-4 py-4 focus:outline-none ${
            activeTab === 'register' ? 'text-[#19a140]  border-b-2 border-l-2 border-[#19a140]' : 'text-black'
          }`}
        >
          Register
        </button>
      </div>

      {activeTab === 'login' && (
        <>
          <LoginForm/>
        </>
      )}

      {activeTab === 'register' && (
        <>
          <RegisterForm/>
        </>
      )}
    </div>
  );
};

export default Login;
