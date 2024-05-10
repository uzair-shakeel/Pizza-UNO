import React, { useState, useEffect } from "react";
import PizzaImage from "../../../assets/pizza.jpg";
import { CiCirclePlus } from "react-icons/ci";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/food/", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPizzas(data.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  //   const pizzas = [
  //     {
  //       id: "1",
  //       img: PizzaImage,
  //       title: "Margherita",
  //       desc: "Mozzarella cheese and our pizza sauce",
  //       price: "£4.20",
  //     },
  //     {
  //       id: "2",
  //       img: PizzaImage,
  //       title: "Pepperoni",
  //       desc: "Pepperoni slices and mozzarella cheese",
  //       price: "£5.00",
  //     },
  //     {
  //       id: "3",
  //       img: PizzaImage,
  //       title: "Vegetarian",
  //       desc: "Assorted vegetables and mozzarella cheese",
  //       price: "£4.50",
  //     },
  //   ];
  console.log(pizzas);

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-4 text-[#c0022a]">Pizzas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pizzas?.map((pizza) => (
          <div
            key={pizza?._id}
            className="bg-white rounded-lg shadow-md py-4 px-3"
          >
            <img
              src={pizza?.img}
              //   alt={pizza?.name}
              className="w-full rounded-md mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{pizza?.name}</h4>
            <p className="text-gray-600 mb-2">{pizza?.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-bold">${pizza?.price}</p>
              <button className="bg-[#18a442] w-[28px] h-[28px] rounded-full">
                <CiCirclePlus className=" text-white flex justify-center items-center w-full h-full" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
