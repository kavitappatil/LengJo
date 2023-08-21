/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import "./SignUp.css";
// // eslint-disable-next-line no-unused-vars
import langJo from "../Images/langJo.png"; // eslint-disable-next-line no-unused-vars
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";


function SignUp() {
  const [isValid, setIsValid] = useState(true);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const handleLoginLinkClick = () => {
  
    window.location.href = "/login";
  };

  // eslint-disable-next-line no-unused-vars
  const resetForm = () => {
    setFormData({
      full_name: "",
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

    if (
      formData.full_name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      setIsValid(false);
      return;
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="background vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black card-color">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                      <p className="text-start h2 sign_up-heading fw-bold p-2">
                        Sign up
                      </p>
                      <span className="form-group d-flex flex-row p-2">
                        Already have an account?{" "}
                        <span className="login" onClick={handleLoginLinkClick}>
                          &nbsp; Log in
                        </span>
                      </span>
                      &nbsp;
                      <form
                        className={`w-75 requires-validation ${
                          !isValid && "was-validated"
                        }`}
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group ">
                          <div className="d-flex flex-row p-2">
                            <label for="exampleName d-flex  ">Full Name</label>
                          </div>
                          <input
                            type="text"
                            name="full_name"
                            className="form-control w-75"
                            id="full_name"
                            placeholder="Name"
                            onChange={handleInputChange}
                            required
                            value={formData.full_name}
                          />
                          <div id="validationName" className="invalid-feedback">
                            Please enter your name.
                          </div>
                        </div>
                        &nbsp;
                        <div className="form-group">
                          <div className="d-flex flex-row p-2">
                            <label for="exampleInputEmail1">
                              Email address
                            </label>
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
                          <div
                            id="validationEmail"
                            className="invalid-feedback"
                          >
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
                            id="exampleInputPassword1"
                            placeholder="Enter Password"
                            name="exampleInputPassword1"
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
                          <button
                            type="submit"
                            className="btn sign_up-btn w-75"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="row d-flex justify-content-start">
                      <GoogleOAuthProvider clientId="522677820369-1puo1ppkkv61m3kt0v49m2mkot39dfmr.apps.googleusercontent.com">
                            <GoogleLogin
                              onSuccess={(credentialResponse) => {
                                let decoded = jwt_decode(
                                  credentialResponse.credential
                                );
                                console.log(decoded);
                              }}
                              onError={() => {
                                console.log("Login Failed");
                              }}
                              className="btn btn-google rouded-3"
                              buttonText="Sign in with Google"
                            />
                          </GoogleOAuthProvider>
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
                  By clicking Continue with or Sign Up, you agree to LangJo{" "}
                  <br />
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
    </>
  );
}

export default SignUp;
