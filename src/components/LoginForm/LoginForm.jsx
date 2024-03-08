import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, seterrors] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid Email Format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be atleast 8 characters long and contains atleast one symbol , one number , one uppercase letter and one lowercase letter";
    }
    seterrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // console.log(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("form submitted", formData);
    } else {
      console.log("form validation failed");
    }

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
  return (
    <>
      <div class="container-fluid">
        <div class="row login d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 mx-auto p-4">
                <div class="clearfix"></div>
                <div class="pt-3">
                  <h1>Login</h1>
                </div>
                <form
                  class="form-group d-flex align-items-center flex-column justify-content-center"
                  onSubmit={handleSubmit}
                >
                  <div class="col-9 d-block mx-auto">
                    <label htmlFor="UserName">Email Address</label>
                    <div className="d-flex">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Email Address"
                        onChange={handleChange}
                        value={formData.email || ""}
                        name="email"
                      />
                      {errors.email && (
                        <div className="errorForm ps-2">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div class="col-9 d-block mx-auto">
                    <label htmlFor="password">Password</label>
                    <div className="d-flex">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="*********"
                        onChange={handleChange}
                        value={formData.password || ""}
                        name="password"
                      />
                      {errors.password && (
                        <div className="errorForm ps-2">{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <button type="submit" value="submit">
                    Submit
                  </button>
                  <span class="text-end pt-1">
                    <Link to={`/signup`} className="ifAccountOrNot">
                      {" "}
                      Already have an account ? Then , SignUp
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
