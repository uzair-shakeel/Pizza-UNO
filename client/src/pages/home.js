import React, { useState } from "react";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Information from "../components/Home/Information";
import WorkingHours from "../components/Home/WorkingHours";

const Home = () => {
  // information Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Working Hours Modal
  const [WorkingModal, setWorkingModal] = useState(false);

  const handleOpenWorkingHours = () => {
    setWorkingModal(true);
  };

  const handleCloseWorkingHours = () => {
    setWorkingModal(false);
  };
  return (
    <div className="flex flex-col py-[20px]">
      <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10 w-full">
        <div className="flex-1 w-full">
          <Menu />
        </div>
        <div className="flex flex-1 gap-2 w-full">
          {/* Information */}
          <>
            <button
              className="w-full px-4 py-2 bg-white rounded-md border border-[#19a140] text-center"
              onClick={handleOpenModal}
            >
              Information
            </button>
            <Information isOpen={isModalOpen} onClose={handleCloseModal} />
          </>
          {/* Working Hours */}
          <>
            <button
              className="w-full px-4 py-2 bg-white rounded-md border border-[#19a140] text-center"
              onClick={handleOpenWorkingHours}
            >
              Working Hours
            </button>
            <WorkingHours
              isOpen={WorkingModal}
              onClose={handleCloseWorkingHours}
            />
          </>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
