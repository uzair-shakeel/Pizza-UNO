// src/components/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    fax: '',
    postcode: '',
    address1: '',
    address2: '',
    city: '',
    password: '',
    confirmPassword: '',
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your server
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto bg-white p-8">
      <h2 className="text-2xl font-semibold mb-6 text-[#19a140]">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="text-lg font-semibold">Personal Details</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium">Telephone:</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="fax" className="block text-sm font-medium">Fax:</label>
            <input
              type="text"
              id="fax"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </fieldset>

        {/* Your Address */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="text-lg font-semibold">Your Address</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="postcode" className="block text-sm font-medium">Post Code:</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="address1" className="block text-sm font-medium">Address 1:</label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="address2" className="block text-sm font-medium">Address 2:</label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="city" className="block text-sm font-medium">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </fieldset>

        {/* Your Password */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="text-lg font-semibold">Your Password</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">Password Confirm:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </fieldset>

        {/* Privacy Policy */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
            className="h-4 w-4 border-gray-300 rounded"
          />
          <span>I have read and agree to the Privacy Policy</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#19a13fe6] text-white p-2 rounded-md hover:bg-[#19a140]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
