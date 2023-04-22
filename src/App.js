import React, { useEffect, useState } from 'react';

function App() {
  const [currentLights1, setCurrentLights1] = useState(1);
  const [lightSwitch, setLightSwitch] = useState(false);

  const currentLights1Handler = () => {
    for (let i = 0; i < 3; i++) {
      setCurrentLights1(i);
    }
    setCurrentLights1(currentLights1 + 1);
    lightRestartHandler();
  };

  // function toggleLightSwitcher(e) {
  //   setInterval(toggleLight, 1000);
  // }

  const lightSwitchHandler = () => {
    setLightSwitch((lightSwitch) => !lightSwitch);
    // toggleLightSwitcher();
    setInterval(toggleLight, 1000);
  };

  const toggleLight = () => {
    currentLights1Handler();
    // toggleLightSwitcher();
  };

  function lightRestartHandler() {
    if (currentLights1 === 3) {
      setCurrentLights1(1);
    }
  }

  const trafficLight1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    top: '60px',
    left: '300px',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
  };

  const trafficLight2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    top: '300px',
    left: '300px',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
  };

  const redLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: currentLights1 === 3 ? 'red' : 'rgb(113, 37, 37)',
  };

  const yellowLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor:
      currentLights1 === 2 ? 'rgb(255, 255, 0)' : 'rgb(104, 104, 14)',
  };
  const greenLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor:
      currentLights1 === 1 ? 'rgb(20, 197, 20)' : 'rgb(6, 67, 6)',
  };

  return (
    <>
      <button onClick={lightSwitchHandler}>Start</button>
      <div style={trafficLight1}>
        <object style={redLight}></object>
        <object style={yellowLight}></object>
        <object style={greenLight}></object>
      </div>
      <div style={trafficLight2}>
        <object style={redLight}></object>
        <object style={yellowLight}></object>
        <object style={greenLight}></object>
      </div>
    </>
  );
}

export default App;
