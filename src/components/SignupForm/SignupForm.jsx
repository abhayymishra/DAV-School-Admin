import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }
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
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmed Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password must match";
    }
    if (!formData.terms) {
      newErrors.terms = "Please accept the terms and conditions";
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
      <div class="container signup-container">
        <h2>Sign Up</h2>
        <div class="form-container">
          <form onSubmit={handleSubmit}>
            <div class="input-name">
              <input
                type="text"
                placeholder="First Name"
                class="name"
                onChange={handleChange}
                value={formData.firstName || ""}
                name="firstName"
              />
              {errors.firstName && (
                <div className="errorForm">{errors.firstName}</div>
              )}
              <span>
                <i class="fa fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="name"
                  onChange={handleChange}
                  value={formData.lastName || ""}
                  name="lastName"
                />
                {errors.lastName && (
                  <div className="errorForm">{errors.lastName}</div>
                )}
              </span>
            </div>

            <div class="input-name">
              <input
                type="email"
                placeholder="E-mail"
                class="text-name"
                onChange={handleChange}
                value={formData.email || ""}
                name="email"
              />
              {errors.email && <div className="errorForm">{errors.email}</div>}
            </div>

            <div class="input-name">
              <input
                type="password"
                placeholder="Password"
                class="text-name"
                onChange={handleChange}
                value={formData.password || ""}
                name="password"
              />
              {errors.password && (
                <div className="errorForm">{errors.password}</div>
              )}
            </div>

            <div class="input-name">
              <input
                type="password"
                placeholder="Confirm Password"
                class="text-name"
                onChange={handleChange}
                value={formData.confirmPassword || ""}
                name="confirmPassword"
              />
              {errors.confirmPassword && (
                <div className="errorForm">{errors.confirmPassword}</div>
              )}
            </div>

            {/* <div class="input-name">
              <input type="radio" class="radio-button" name="r1" />
              <label className="malelabel">Male</label>

              <input type="radio" class="radio-button" name="r1" />
              <label>Female</label>
            </div> */}

            {/* <div class="input-name">
              <select class="country">
                <option>Select a country</option>
                <option>India</option>
                <option>USA</option>
                <option>England</option>
                <option>New Zealand</option>
              </select>
              <div class="arrow"></div>
            </div> */}

            <div class="input-name">
              <input
                type="checkbox"
                class="check-button"
                onChange={handleChange}
                name="terms"
              />
              <label for="check-button" class="check">
                I accept the terms and conditions.
              </label>
              {errors.terms && <div className="errorForm">{errors.terms}</div>}
            </div>

            <div class="input-name">
              <input type="submit" class="button" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
