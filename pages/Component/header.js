import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logimage from "./image/login_success.jpg";
console.log("logimage", logimage);
const Header = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <header className="container main-hd ">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            id="navbar-trans"
          >
            <a href="/" className="navbar-brand" id="mn-lg">
              <img src="./image/driver_logo.jpg" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedConten"
            >
              <ul
                className="navbar-nav mb-2 mb-lg-0 lg-crt"
                id="m-nv"
                style={{ marginLeft: "auto" }}
              >
                <li className="nav-item " id="dlv">
                  <div className="header-cart">
                    <a className="nav-link" href="#">
                      {/* <BsCartDash size="36px" /> */}
                    </a>
                    {/* <span>{cartData.length}</span> */}
                  </div>
                </li>
                <li className="nav-item" id="lg-sn">
                  <button
                    type="button"
                    className="btn login-button01"
                    data-bs-toggle="modal"
                    data-bs-target="#login01modal"
                  >
                    <FaUserCircle size="20px" /> Login/Sign Up
                  </button>

                  {/* ====================start modal================ */}

                  <div
                     className="modal fade"
                    id="login01modal"
                    tabindex="-1"
                    aria-labelledby="login01modalLabel"
                    aria-hidden="true"
                  >
                    <div  className="modal-dialog modal-xl">
                      <div  className="modal-content shadow roundedborder">
                        <div  className="modal-body" id="lg007">
                          <div  className="row d-flex p-0">
                            <div  className="col-8">
                              <div  className="form-group">
                                <div className="left-side">
                                  <img src="https://imgur.com/K230JeW.jpg" width="100%"  height='500px'/>
                                </div>
                              </div>
                            </div>

                            <div className="col-4 " style={{padding:'34px'}}>
                              <div  className="d-flex justify-content-end">
                                <button
                                  type="button"
                                   className="btn-close md-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="form">
                                <div className="right-side">
                                  <div className="heading">
                                    <h3 className="welcomehed">Welcome</h3>
                                  </div>
                                  <div className="heading mt-5">
                                    <h3>Login / Signup</h3>
                                  </div>

                                  <form>
                                    <div  className="form-group">
                                      <input
                                        type="email"
                                         className="form-controll  anand"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter mobile number"
                                      />
                                    </div>

                                    <div  className="text-center mt-2">
                                      <button
                                        type="submit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#enterotp"
                                        data-bs-dismiss="modal"
                                        className="btn btn-lg btn-primary btn-block snd-otp"
                                        value="Send OTP"
                                      >
                                        continew
                                      </button>
                                    </div>
                                  </form>
                                  <div className="register">
                                    <p>
                                      Didn't have an account? Didn't have an
                                      account?
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ==================================================================== */}

                  {/* ===============================send otp============================== */}
                  <div
                     className="modal fade"
                    id="enterotp"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div  className=" modal-dialog modal-xl ">
                      <div  className="modal-content shadow roundedborder">
                        <div  className="modal-body" id="lg007">
                          <div className=" container">
                            <div className="row">
                              <div className="col-8 p-0">
                                <div className="form-group">
                                  <div className="left-side">
                                    <img src="https://imgur.com/K230JeW.jpg"  width="100%"  height='500px' />
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 p-5 " >
                                <div  className=" d-flex justify-content-end">
                                  <button
                                    type="button"
                                     className="btn-close md-close"
                                    data-bs-dismiss="modal"
                                    data-bs-target="#changepass"
                                    aria-label="Close"
                                  ></button>
                                </div>

                                <div className="heading">
                                  <h3 className="welcomehed ">Welcome</h3>
                                </div>
                                <div className="heading mt-3 text-center">
                                  <h4>verify OTP</h4>
                                  <p>Enter 4 digit OTP seNt to -8985634532</p>
                                </div>

                                <fieldset className="p-0 mt-3">
                                  <div className="form-group">
                                    <div
                                      id="otp"
                                      className="inputs d-flex flex-row justify-content-center mt-2 mb-3"
                                    >
                                      <input
                                        className="m-2 text-center form-control rounded"
                                        type="text"
                                        id="second"
                                        maxlength="1"
                                      />
                                      <input
                                        className="m-2 text-center form-control rounded"
                                        type="text"
                                        id="third"
                                        maxlength="1"
                                      />
                                      <input
                                        className="m-2 text-center form-control rounded"
                                        type="text"
                                        id="fourth"
                                        maxlength="1"
                                      />
                                      <input
                                        className="m-2 text-center form-control rounded"
                                        type="text"
                                        id="fifth"
                                        maxlength="1"
                                      />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="">
                                        <p className="">Don't get OTP</p>
                                      </div>
                                      <div>
                                        <p>Resend</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center ">
                                    <button
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#changepass"
                                      data-bs-dismiss="modal"
                                      value="Submit"
                                      className="btn btn-lg btn-primary btn-block sbt"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </fieldset>
                                <div className="register">
                                  <p>
                                    Didn't have an account? Didn't have an
                                    account? Didn't have an account? Didn't have
                                    an account?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <!--Congrantulations--> modal--> */}

                  <div
                    id="changepass"
                    className="modal fade"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content shadow roundedborder">
                        <div className="modal-header border-bottom-0">
                          <button
                            type="button"
                            className="btn-close md-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* <p className="text-center lis01 mb-5">
                            Cnahge Password
                          </p> */}
                          <div className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body mds004">
                                <div  className="card shadow mb-5  roundedborder ">
                                  <div  className="card-body bottom-0 d-flex justify-content-around">
                                    <div>
                                      <img
                                        width="40px"
                                        src={logimage.src}
                                        alt="sdfsdf"
                                      />
                                    </div>
                                    <div className="  ">
                                      <h5 className="text-center">
                                        Congrantulation
                                      </h5>
                                      <div>
                                        <p className=" text-center">
                                          Account Add successfull
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <fieldset>
                                    <form className="frm-md">
                                      <div className="form-group mb-3">
                                        <input
                                          type="text"
                                          className="form-control form-successfuly"
                                       
                                          placeholder="Enter Your Full Name"
                                        />
                                      </div>
                                      <div className="form-group mb-3">
                                        <input
                                          type="email"
                                          className="form-control form-successfuly  "
                                         
                                          placeholder="Enter Your Email Address"
                                        />
                                      </div>
                                    </form>
                                    <div className="text-center m-4">
                                      <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#pass1"
                                        data-bs-dismiss="modal"
                                        value="Submit"
                                        className="btn btn-lg btn-primary btn-block sbt"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <!--password change successfully modal--> */}
                  {/* <div
                    id="pass1"
                    className="modal fade"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                          <button
                            type="button"
                            className="btn-close md-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body mds004">
                                <div className="">
                                  <div className="panel-body text-center">
                                    <p className="text-center lis01 mb-2">
                                      Password changed successfuly
                                    </p>
                                    <img
                                      className="scl"
                                      src="img/correct.png"
                                      alt="correct"
                                    />
                                  </div>
                                  <div className="text-center"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
