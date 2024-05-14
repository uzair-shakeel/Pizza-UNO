import React, { useEffect, useState } from "react";
import "../styles/menu.css";
import { FoodCard } from "../shared/FoodCard";
import { useLocation } from "react-router-dom";
import Search from "../shared/Search";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import Spinner from "../component/Spinner";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState(queryParams.get("search") || "");
  // const [categories, setCategories] = useState([]);

  const { data: menuCount } = useFetch(
    filter === "" ? `${BASE_URL}/food` : `${BASE_URL}/food/category/${filter}`
  );

  console.log(menuCount);

  const totalPages = Math.ceil(menuCount / 8);

  useEffect(() => {
    window.scrollTo(0, -1);
  });

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/category`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      return []; // or handle the error in a different way
    }
  };
  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  useEffect(() => {
    const scrollToTop = () => {
      const scrollStep = -window.scrollY;
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      });
    };
    scrollToTop();
  }, [location]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const categories = [
    "Pizzas",
    "Burgers",
    "Pizza",
    "BBQ",
    "Chinese",
    "Dessert",
  ];

  const { data: foodData, loading, error } = useFetch(`${BASE_URL}/food`);

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 d-flex align-items-center  justify-content-between gap-3 pb-5 pt-3 flex-wrap">
            <div className="d-flex h-100">
              <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>

            <div className="d-flex gap-3 align-items-center justify-content-center my-auto flex-wrap">
              <button
                className={`filter-btn1 btn btn-light ${
                  filter === "" ? "active" : ""
                }`}
                onClick={() => {
                  setFilter("");
                }}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn1 btn btn-light ${
                    filter === category ? "active" : ""
                  }`}
                  onClick={() => {
                    setFilter(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {loading && (
            <h3>
              <Spinner />
            </h3>
          )}
          {error && <h5>{error}</h5>}
          {!loading &&
            !error &&
            foodData?.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={item._id}
              >
                <FoodCard item={item} />
              </div>
            ))}
          {totalPages > 1 && (
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active-page" : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
