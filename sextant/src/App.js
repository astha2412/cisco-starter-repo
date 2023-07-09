import React from "react";
import './index.css'
import Banner from "./Components/Banner/Banner";
import Exhibit from "./Components/Exhibit/Exhibit";
import AddressDisplay from "./Components/AddressDisplay/AddressDisplay";
import PylonConnect from "./Components/Connect/PylonConnect";

const App = () => {
  return (
    <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <PylonConnect />
                </Exhibit>
            </div>
  );
};


export default App;