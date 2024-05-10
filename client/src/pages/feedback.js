import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-6 bg-white rounded border border-[#19a140] shadow-xl shadow-[#19a140] my-20 ">
      <h2 className="text-2xl font-semibold mb-6 text-[#19a140]">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#19a140]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#19a140]"
            required
          />
        </div>
    
        <div>
          <label htmlFor="message" className="block font-medium">Feedback:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#19a140]"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#19a13fdc] text-white px-4 py-2 rounded-md hover:bg-[#19a140] transition-colors duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
