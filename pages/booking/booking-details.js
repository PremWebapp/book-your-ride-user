import React from 'react'
import DetailImageCard from './bookingDetailhelper/detailImageCard';
import DetilsTextCard from './bookingDetailhelper/detilsTextCard';
import style from "./booking.module.css"
import Description from './bookingDetailhelper/description';
import { Tabs } from 'antd';
import RatingCard from './bookingDetailhelper/rating&review';


function BookingDetails() {
  const { TabPane } = Tabs;
  const onChange = (key) => {
    console.log(key);
  }
  return (
    <div className="container">

      <div className='row mb-3'>
        {/* details imgae card */}
        <div className='col-md-8 col-sm-8'>
          <DetailImageCard />
        </div>
        {/* detaills descriptions */}
        <div className='col-md-4 col-sm-4'>
          <DetilsTextCard />
        </div>
      </div>

      {/* details tab card  full descriptions*/}
      <Tabs className='' defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Description" key="1">
          <div className={` card ${style.descriptionCard}  shadow my-3 `} >
            <div className='p-5 mx-4 '>
              <Description />
              <Description />
              <Description />
              <Description />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Rating & Review" key="2">
          <div className={` card ${style.descriptionCard}  shadow my-3 `} >
            <div className='p-5 mx-4 '>
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </div>
          </div>
        </TabPane>

      </Tabs>

    </div>
  )
}

export default BookingDetails