import React from "react";
import "./SignUp.css";
import langJo from "../Images/langJo.png";

function SignUp() {
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
                      Sign up
                    </p>
                    <span className="form-group d-flex flex-row p-2">
                      Already have an account?{" "}
                      <span className="login">&nbsp; Log in</span>
                    </span>
                    &nbsp;
                    <form>
                      <div className="form-group ">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleInputPassword1 d-flex  ">
                            Full Name
                          </label>
                        </div>
                        <input
                          type="name"
                          className="form-control w-75"
                          id="exampleInputName"
                          placeholder="Name"
                        />
                      </div>
                      &nbsp;
                      <div className="form-group">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleInputEmail1">Email address</label>
                        </div>
                        <input
                          type="email"
                          className="form-control w-75"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
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
                          placeholder="Password"
                        />
                      </div>
                      <br />
                      <div className="row d-flex justify-content-start p-3">
                        <button type="submit" className="btn sign_up-btn w-75">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    {/* <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" for="form3Example1c">Full Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" for="form3Example3c">Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form> */}
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
                By clicking Continue with or Sign Up, you agree to LangJo <br />
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
export default SignUp;