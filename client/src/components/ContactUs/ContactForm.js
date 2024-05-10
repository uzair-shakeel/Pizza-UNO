import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="max-w-[1000px] w-full mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#19a140]">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded-md outline-none focus:border-[#19a140]" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md outline-none focus:border-[#19a140]" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" required className="mt-1 p-2 w-full border rounded-md outline-none focus:border-[#19a140]"></textarea>
                </div>
                <button type="submit" className="bg-[#19a13fe0] text-white py-2 px-4 rounded-md hover:bg-[#19a140]">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
