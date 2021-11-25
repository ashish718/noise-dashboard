import React, { useState, useEffect } from 'react';
import {Form, Button, Tabs, Tab} from 'react-bootstrap';
//import tab pages
import Upload from '../pages/student/Upload';
import CouponData from '../pages/student/CouponData';
import CouponUsed from '../pages/student/CouponUsed';
import CouponStudent from '../pages/student/CouponStudent';
import CouponAlign from '../pages/student/CouponAlign';
import RegisterStudent from '../pages/student/RegisterStudent'
import Summary from '../pages/student/Summary';
import Records from '../pages/student/Records';
function Coupon(){


    return(
        <div>
            <Tabs defaultActiveKey="upload" transition={false} id="noanim-tab-example">
                <Tab eventKey="upload" title="Upload">
                    <Upload />
                </Tab>
                <Tab eventKey="records" title="Records">
                    <Records />
                </Tab>
                 <Tab eventKey="Summary" title="Summary">
                    <Summary />
                </Tab>
                {/*<Tab eventKey="couponAlign" title="couponAlign">
                    <CouponAlign />
                </Tab>
                <Tab eventKey="couponStudent" title="couponStudent">
                    <CouponStudent />
                </Tab>
                <Tab eventKey="registerStudent" title="registerStudent">
                    <RegisterStudent />
                </Tab> */}
            </Tabs>
        </div>
    )
}

export default Coupon