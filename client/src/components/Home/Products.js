import React, { useState, useEffect } from "react";
import Pizzas from "./Products/Pizzas";
import GarlicBread from "./Products/GarlicBread";
import axios from "axios";

const Products = () => {
  return (
    <div className="w-full mt-[50px] flex flex-col gap-[50px]">
      <Pizzas />
      <GarlicBread />
    </div>
  );
};

export default Products;
