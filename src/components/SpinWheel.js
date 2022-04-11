import React from "react";
import { Tabs, Tab } from "react-bootstrap";
//import tab pages
import SpinConfig from "../pages/spin/SpinConfig";
import SpinTable from "../pages/spin/SpinTable";
import SpinUser from "../pages/spin/SpinUser";

function SpinWheel() {
  return (
    <div className="container my-3">
      <Tabs
        defaultActiveKey="upload"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="upload" title="Upload Config File">
          <SpinConfig />
        </Tab>
        <Tab eventKey="Spin-Data" title="Spin Config Data">
          <SpinTable />
        </Tab>
        <Tab eventKey="Spin-User" title="Spin User Data">
          <SpinUser />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SpinWheel;
