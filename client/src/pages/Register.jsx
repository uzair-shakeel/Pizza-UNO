import React, { useState, useEffect, useContext } from "react";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "./../utils/config";
import { toast } from "react-toastify";

import RegisterImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const [credentials, setCredentials] = useState({
    username: undefined,
    phone: "",
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/user/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.error("Registeration Failed");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="login-container d-flex justify-content-between">
              <div className="login-form">
                <div className="user">
                  <img
                    className="img-fluid rounded-circle"
                    src={userIcon}
                    alt=""
                  />
                </div>
                <h2>Register</h2>

                <form onSubmit={handleClick}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div className="form-group mb-3">
                      <input
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group mb-3">
                      <input
                        type="number"
                        placeholder="Telephone"
                        id="telephone"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        id="passwordConfirm"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div className="form-group mb-3">
                      <input
                        type="number"
                        placeholder="Postcode"
                        id="postcode"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        placeholder="City"
                        id="city"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="address"
                      placeholder="Address"
                      id="address1"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="btn btn-secondary auth-btn" type="submit">
                    Create Account
                  </button>
                </form>
                <p>
                  Already have an account? <Link to="/Login">Login</Link>
                </p>
              </div>
              <div className="login-img d-flex justify-content-center">
                <img src={RegisterImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
