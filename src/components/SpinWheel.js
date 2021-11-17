import React, { useState, useEffect } from 'react';
import {Form, Button, Tabs, Tab} from 'react-bootstrap';
//import tab pages
import SpinConfig from '../pages/spin/SpinConfig';
import SpinTable from '../pages/spin/SpinTable';


function SpinWheel(){


    return(
        <div>
            <Tabs defaultActiveKey="upload" transition={false} id="noanim-tab-example">
                <Tab eventKey="upload" title="Upload Config File">
                    <SpinConfig />
                </Tab>
                <Tab eventKey="Spin-Data" title="Spin Config Data">
                    <SpinTable />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SpinWheel
