import { useState, useEffect } from "react";
import "./LogIn.css";
import langJo from "../Images/langJo.png";

function LogIn() {
  const [isValid, setIsValid] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    //toast("There was an error loading this page.");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setIsValid(false);
      return;
    }
  };
  return (
    <section className="background vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black card-color">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                    <p className="text-start h2 sign_up-heading fw-bold p-2">
                      Login
                    </p>
                    <span className="form-group d-flex flex-row p-2">
                      Sign up as a student{" "}
                    </span>
                    &nbsp;
                    <form
                      className={`w-75 requires-validation ${
                        !isValid && "was-validated"
                      }`}
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleEmail">Email address</label>
                        </div>
                        <input
                          type="email"
                          className="form-control w-75"
                          name="email"
                          id="email"
                          placeholder="Enter email address "
                          maxLength="500"
                          onChange={handleInputChange}
                          required
                          value={formData.email}
                        />
                        <div id="validationEmail" className="invalid-feedback">
                          Please enter your email address.
                        </div>
                      </div>
                      &nbsp;
                      <div className="form-group">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleInputPassword1">Password</label>
                        </div>
                        <input
                          type="password"
                          className="form-control w-75"
                          placeholder="Enter Password"
                          name="email"
                          id="exampleInputPassword1"
                          maxLength="200"
                          onChange={handleInputChange}
                          required
                          value={formData.password}
                        />
                        <div
                          id="validationPassword"
                          className="invalid-feedback"
                        >
                          Please enter your password.
                        </div>
                      </div>
                      <br />
                      <div className="row d-flex justify-content-start p-3">
                        <button type="submit" className="btn sign_up-btn w-75">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-2">
                    <img
                      src={langJo}
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
              <div>
                By clicking Continue with or Log in, you agree to LangJo <br />
                <span className="font-weight-bold">
                  Terms of Service and Privacy Policy
                </span>
                &nbsp; &nbsp;
              </div>
              <span className="font-weight-bold">&nbsp; &nbsp; </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
