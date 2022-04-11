import React from "react";
import { Tabs, Tab } from "react-bootstrap";
//import tab pages
import Upload from "../pages/student/Upload";
// import CouponData from "../pages/student/CouponData";
// import CouponUsed from "../pages/student/CouponUsed";
// import CouponStudent from "../pages/student/CouponStudent";
// import CouponAlign from "../pages/student/CouponAlign";
// import RegisterStudent from "../pages/student/RegisterStudent";
import Summary from "../pages/student/Summary";
import Records from "../pages/student/Records";
import UploadIIT from "../pages/student/studentIIT/UploadIIT";
import RecordIIT from "../pages/student/studentIIT/RecordIIT";
import SummaryIIT from "../pages/student/studentIIT/SummaryIIT";

const Coupon = () => {
  return (
    <div className="conatiner my-3">
      <h1 className="my-2 mb-4" style={{textAlign:'left', fontFamily:"Arial Rounded MT Bold"}}> Noise Campus</h1>
      <Tabs
        defaultActiveKey="upload"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="upload" title="Upload" >
          <Upload />
          <br/>
          <h3 className="my-4">For IITs, Upload CSV file here:- </h3>
          <UploadIIT/>
        </Tab>
        <Tab eventKey="records" title="Records">
          <Records />
        </Tab>
        <Tab eventKey="recordsIIT" title="Records IIT">
          <RecordIIT/>
        </Tab>
        <Tab eventKey="Summary" title="Summary">
          <Summary />
          <br/>
          <h3 className="my-4">For IITs, Summary here:- </h3>
          <SummaryIIT/>
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
  );
};

export default Coupon;
