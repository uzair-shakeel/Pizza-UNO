import React, { useState } from "react";
import "./create-food.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/config";

const CreateFood = () => {
  const [menuData, setMenuData] = useState({
    name: "",
    category: "",
    price: 0,
    image: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMenuData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cloudinaryConfig = {
    cloudName: "dazko9ugd",
    apiKey: "229314452358913",
    apiSecret: "a60Y6vKeapSAgxHNtGpOsPhwNGY",
  };

  const handleCreateFood = async (e) => {
    e.preventDefault();
    if (
      !menuData.name ||
      !menuData.category ||
      !menuData.price ||
      !menuData.description ||
      !menuData.image
    ) {
      toast.error("Please fill in all required fields.");
      return;
    } else {
      try {
        if (menuData.image) {
          const formData = new FormData();
          formData.append("file", menuData.image);

          const response = await fetch(`${BASE_URL}/upload`, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to upload image");
          }

          const imageData = await response.json();
          menuData.image = imageData.file.filename; // Assuming backend returns the filename
        }

        const response = await fetch(`${BASE_URL}/food/create`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(menuData),
        });

        const { message } = await response.json();

        if (!response.ok) {
          toast.error(message);
          return;
        }

        toast.success("Successfully created a new food.");
        navigate("/menu");
      } catch (err) {
        toast.error("Error creating food.");
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className="d-flex w-100 align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12 shadow-lg rounded-2">
              <h1 className="text-center mb-5 mt-3">Create A New Food</h1>

              <form onSubmit={handleCreateFood}>
                <div className="input-fields input-group mb-3 d-flex flex-column flex-sm-row gap-3 gap-md-0">
                  <div className="d-flex  flex-grow-1">
                    <span className="input-group-text">Food name:</span>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="name of the food"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex flex-grow-1 ">
                    <span className="input-group-text">Category:</span>
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      placeholder="Category of the food"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-fields input-group mb-3">
                  <span className="input-group-text">Price:</span>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price of the food"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields input-group mb-3">
                  <span className="input-group-text">description:</span>
                  <textarea
                    rows="5"
                    name="description"
                    className="form-control"
                    placeholder="description of the food"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile01"
                  >
                    Food Pic
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    id="inputGroupFile01 image"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) =>
                      setMenuData({ ...menuData, image: e.target.files[0] })
                    }
                  />
                </div>
                <div className="justify-content-end d-flex">
                  <button
                    type="submit"
                    onClick={handleCreateFood}
                    className="btn btn-light create-food-btn mb-3"
                  >
                    {" "}
                    <i className="ri-file-add-line"></i> Create Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFood;
