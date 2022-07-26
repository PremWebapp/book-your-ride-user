import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { DatePicker, Space } from "antd";
import { TimePicker } from 'antd';





import "antd/dist/antd.css";
const { RangePicker } = DatePicker;
const onChange = (time, timeString) => {
  console.log(time, timeString);
};

function Carousel() {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="">
            <img
              className="slider-image position-relative"
              src="./image/sw2.jpg"
              alt="dfsf"
            />
            <div className="col text1 text-center position-absolute eyurr">
              <div>
                <h1 className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </h1>
                <p className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>

            <div className="col position-absolute eyur">
              <div className="col-8 crd1" id=" rcorners">
                <div className="dfsg">
                  <div>
                    <form>
                      <div className="radio-buttons d-flex mb-3 ">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label marginLable"
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label "
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3">
                          <div className="qw">
                            <div className="btn-lg d-flex p-0 ">
                              {/* <input
                    type="text"
                     className="input-small from-input-txt form-control "
                    placeholder="form"
                  
                  /> */}
                              <select className="form-select" aria-label="">
                                <option selected>from</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>

                              <button
                                type="button"
                                className="btn btn-secondary btn-circle btn-sm crebutton"
                              >
                                <span className="">
                                  <HiOutlineArrowNarrowLeft
                                    className="arrow-top1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                                <span>
                                  {" "}
                                  <HiOutlineArrowNarrowRight
                                    className="arrow-bottom1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                              </button>

                              <select className="form-select" aria-label="">
                                <option selected>to</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-3 inputeendd">
                          <Space direction="vertical" size={12}>
                            <DatePicker
                              renderExtraFooter={() => "extra footer"}
                            />
                          </Space>
                        </div>
                        <div className="col-3 inputeend">
                          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                        </div>
                        <div className="col-3">
                          <div className="input-group">
                            <div className="form-outline " id="inputeplace">
                              <input
                                type="search"
                                id="form1"
                                className="form-control"
                                placeholder="search"
                              />
                              <label className="form-label" for="form1">
                                <span className="position-absolute search-icon">
                                  <BsSearch />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="position-absolute topPosition">
                <button className="button button2">SEARCH VEHICLE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              className="slider-image position-relative"
              src="./image/sw2.jpg"
              alt="dfsf"
            />
            <div className="col text1 text-center position-absolute eyurr">
              <div>
                <h1 className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </h1>
                <p className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>

            <div className="col position-absolute eyur">
              <div className="col-8 crd1" id=" rcorners">
                <div className="dfsg">
                  <div>
                    <form>
                      <div className="radio-buttons d-flex mb-3 ">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label marginLable"
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label "
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3">
                          <div className="qw">
                            <div className="btn-lg d-flex p-0 ">
                              {/* <input
                    type="text"
                     className="input-small from-input-txt form-control "
                    placeholder="form"
                  
                  /> */}
                              <select className="form-select" aria-label="">
                                <option selected>from</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>

                              <button
                                type="button"
                                className="btn btn-secondary btn-circle btn-sm crebutton"
                              >
                                <span className="">
                                  <HiOutlineArrowNarrowLeft
                                    className="arrow-top1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                                <span>
                                  {" "}
                                  <HiOutlineArrowNarrowRight
                                    className="arrow-bottom1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                              </button>

                              <select className="form-select" aria-label="">
                                <option selected>to</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-3 inputeendd">
                          <Space direction="vertical" size={12}>
                            <DatePicker
                              renderExtraFooter={() => "extra footer"}
                            />
                          </Space>
                        </div>
                        <div className="col-3 inputeend">
                          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                        </div>
                        <div className="col-3">
                          <div className="input-group">
                            <div className="form-outline " id="inputeplace">
                              <input
                                type="search"
                                id="form1"
                                className="form-control"
                                placeholder="search"
                              />
                              <label className="form-label" for="form1">
                                <span className="position-absolute search-icon">
                                  <BsSearch />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="position-absolute topPosition">
                <button className="button button2">SEARCH VEHICLE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              className="slider-image position-relative"
              src="./image/sw2.jpg"
              alt="dfsf"
            />
            <div className="col text1 text-center position-absolute eyurr">
              <div>
                <h1 className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </h1>
                <p className="text-white dm-08">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>

            <div className="col position-absolute eyur">
              <div className="col-8 crd1" id=" rcorners">
                <div className="dfsg">
                  <div>
                    <form>
                      <div className="radio-buttons d-flex mb-3 ">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label marginLable"
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label "
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3">
                          <div className="qw">
                            <div className="btn-lg d-flex p-0 ">
                              {/* <input
                    type="text"
                     className="input-small from-input-txt form-control "
                    placeholder="form"
                  
                  /> */}
                              <select className="form-select" aria-label="">
                                <option selected>from</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>

                              <button
                                type="button"
                                className="btn btn-secondary btn-circle btn-sm crebutton"
                              >
                                <span className="">
                                  <HiOutlineArrowNarrowLeft
                                    className="arrow-top1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                                <span>
                                  {" "}
                                  <HiOutlineArrowNarrowRight
                                    className="arrow-bottom1"
                                    size="2x"
                                  />{" "}
                                </span>{" "}
                              </button>

                              <select className="form-select" aria-label="">
                                <option selected>to</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-3 inputeendd">
                          <Space direction="vertical" size={12}>
                            <DatePicker
                              renderExtraFooter={() => "extra footer"}
                            />
                          </Space>
                        </div>
                        <div className="col-3 inputeend">
                          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                        </div>
                        <div className="col-3">
                          <div className="input-group">
                            <div className="form-outline " id="inputeplace">
                              <input
                                type="search"
                                id="form1"
                                className="form-control"
                                placeholder="search"
                              />
                              <label className="form-label" for="form1">
                                <span className="position-absolute search-icon">
                                  <BsSearch />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="position-absolute topPosition">
                <button className="button button2">SEARCH VEHICLE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}

export default Carousel;
