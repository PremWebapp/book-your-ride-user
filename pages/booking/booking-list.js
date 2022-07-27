import { Tabs } from 'antd';
import BookingFilterCard from './bookingHelper/bookingFilterCard';
import ItemCard from './bookingHelper/itemCard';

const Bookingcablist = () => {
  const { TabPane } = Tabs;
  const fgdgdgdgd = (key) => {
    console.log(key);
  };

  return (

    <div>
      <div className="px-sm-5 px-bd-5 px-xl-5 px-2xl-5">

        <div className="row p-sm-5 p-bd-5 p-xl-5 p-2xl-5">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-2xl-4 col-12 mt-5 ">
            <BookingFilterCard />
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-2xl-8 col-12">
            <div className=" px-4">

              <div class="card ">
                <div class="card-body">
                  <div className="d-flex">
                  <span className="font-weight-bold pe-5 position-absolute mt-3 fw-bold fs-5 ">Sort By </span>

                    <Tabs defaultActiveKey="1" onChange={fgdgdgdgd}>
                      <TabPane tab="Popularty" key="1">
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/> 
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                      </TabPane>
                      <TabPane tab="Price - Low to High" key="2">
                      <ItemCard/>
                        <ItemCard/>
                        <ItemCard/> 
                      </TabPane>
                      <TabPane tab="Price - High to Low" key="3">
                      <ItemCard/>
                        <ItemCard/>
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bookingcablist