import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";


const SocialLinks = () => {
    return (
        <div className="max-w-[1000px] w-full my-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#19a140]">Follow Us</h2>
            <div className="flex items-center justify-center md:justify-start gap-6">
                <a href="#" className="text-[#232222] hover:text-[#19a140] duration-300 transition"><FaFacebookF className='w-8 h-8'/></a>
                <a href="#" className="text-[#232222] hover:text-[#19a140] duration-300 transition"><GrInstagram className='w-8 h-8'/></a>
                <a href="#" className="text-[#232222] hover:text-[#19a140] duration-300 transition"><FaXTwitter className='w-8 h-8'/></a>
            </div>
        </div>
    );
};

export default SocialLinks;
