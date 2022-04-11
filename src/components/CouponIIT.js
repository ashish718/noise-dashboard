import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const CouponIIT = () => {
  return (
    <>
      <div>
        <Tabs defaultActiveKey="upload" transition={false} id="coupiit">
          <Tab eventKey="upload" title="Upload">
            <p>This is Upload</p>
          </Tab>
          <Tab eventKey="records" title="Records">
            <p>This is Records</p>
          </Tab>
          <Tab eventKey="summary" title="Summary">
            <p>This is Summary</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default CouponIIT;
