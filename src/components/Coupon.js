import React, { useState, useEffect } from 'react';
import {Form, Button, Tabs, Tab} from 'react-bootstrap';
//import tab pages
import Upload from '../pages/student/Upload';
import CouponData from '../pages/student/CouponData';
import CouponUsed from '../pages/student/CouponUsed';
import CouponStudent from '../pages/student/CouponStudent';
import CouponAlign from '../pages/student/CouponAlign';
import RegisterStudent from '../pages/student/RegisterStudent'

function Coupon(){


    return(
        <div>
            <Tabs defaultActiveKey="upload" transition={false} id="noanim-tab-example">
                <Tab eventKey="upload" title="Upload">
                    <Upload />
                </Tab>
                <Tab eventKey="couponData" title="CouponData">
                    <CouponData />
                </Tab>
                <Tab eventKey="couponUsed" title="CouponUsed">
                    <CouponUsed />
                </Tab>
                <Tab eventKey="couponAlign" title="couponAlign">
                    <CouponAlign />
                </Tab>
                <Tab eventKey="couponStudent" title="couponStudent">
                    <CouponStudent />
                </Tab>
                <Tab eventKey="registerStudent" title="registerStudent">
                    <RegisterStudent />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Coupon