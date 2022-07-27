import React, { useState } from 'react'
import { Progress, Button, Dropdown, Space, Menu, Checkbox, Slider } from 'antd';
import style from "../booking.module.css"

import { DownOutlined, UserOutlined } from '@ant-design/icons';
function BookingFilterCard() {

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    const options = [
        {
            label: <span className="px-3">4 * & Above</span>,
            value: '4',
        },
        {
            label: <span className="px-3">3 * & Above</span>,
            value: '3',
        },
        {
            label: <span className="px-3">2 * & Above</span>,
            value: '2',
        },
        {
            label: <span className="px-3">1 * & Above</span>,
            value: '1',
        },
    ];


    const menu = (
        <Menu
            items={[
                {
                    label: '1nd menu item',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    label: '2nd menu item',
                    key: '2',
                    icon: <UserOutlined />,
                },
                {
                    label: '3rd menu item',
                    key: '3',
                    icon: <UserOutlined />,
                },
            ]}
        />
    );
    return (
        <div>
            <div className="p-3 mt-5 ">
                <div class={`card  ${style.cardRound} px-4 py-5`}>
                    <div class={`card-body ${style.filrteCardRap} py-5`}>
                        <h5 class="card-title">Price Per Kilometer</h5>
                        <div className="">
                            <Slider tooltipVisible={false} defaultValue={30} />
                        </div>
                        <span className="">15 Rupees per KM</span>

                        <div className="py-3">
                            <p className={`${style.filterLabel}`}>Car Brand</p>
                            <Dropdown size={90} overlay={menu}>
                                <Button>
                                    <Space>
                                        Select Brand
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>

                        <div className="py-2">
                            <p className={`${style.filterLabel} `}>Select Vahicle</p>
                            <Dropdown overlay={menu}>
                                <Button>
                                    <Space>
                                        Select Vahicle
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>

                        <div className="py-3 me-5">
                            <p className={`${style.filterLabel}`}>Customer Rating</p>
                            <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingFilterCard