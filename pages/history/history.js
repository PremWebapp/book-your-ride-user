import React from 'react'
import { Tabs } from 'antd';
import Historycard from './historycard';

function History() {
    const { TabPane } = Tabs;
    const fgdgdgdgd = (key) => {
        console.log(key);
    };

    return (
        <div className='container mb-5'>
            <Tabs defaultActiveKey="1" onChange={fgdgdgdgd}>
                <TabPane tab="Upcoming" key="1">
                 <Historycard/>
                 <Historycard/>
                 <Historycard/>
                 <Historycard/>
                </TabPane>
                <TabPane tab="History" key="2">
                <Historycard/>
                 <Historycard/>
                 <Historycard/>
                 <Historycard/>
                </TabPane>
             
            </Tabs>
        </div>
    )
}

export default History