import React, { useEffect, useState } from 'react';

let lightSwitchInterval;
function App() {
  const [TLights1, setTLights1] = useState(0);

  const startInterval = () => {
    clearInterval(lightSwitchInterval);
    lightSwitchInterval = setInterval(TLights1Handler, 1000);
  };

  const stopInterval = () => {
    clearInterval(lightSwitchInterval);
  };

  useEffect(() => {
    return () => clearInterval(lightSwitchInterval);
  }, []);

  const TLights1Handler = () => {
    setTLights1((currentState) => (currentState + 1) % 3);
  };

  const trafficLight1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    top: '60px',
    left: '600px',
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
    left: '600px',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
  };

  const redLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: TLights1 === 2 ? 'red' : 'rgb(113, 37, 37)',
  };

  const yellowLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: TLights1 === 1 ? 'rgb(255, 255, 0)' : 'rgb(104, 104, 14)',
  };
  const greenLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: TLights1 === 0 ? 'rgb(20, 197, 20)' : 'rgb(6, 67, 6)',
  };

  return (
    <>
      {/* <button onClick={startInterval}>Start</button> */}
      <button onClick={startInterval}>Start</button>
      <button onClick={stopInterval}>Stop</button>
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

// function App() {
//   const [TLights1, setTLights1] = useState(1);
//   // const [lightSwitch, setLightSwitch] = useState(false);

//   const TLights1Handler = () => {
//     let i = 0;
//     while (i < 3) {
//       setTLights1(i);
//       i++;
//     }
//     setTLights1(TLights1 + 1);
//     lightRestartHandler();
//   };

//   // const lightSwitchHandler = () => {
//   //   setInterval(TLights1Handler, 1000);
//   // };
//   const clearTimer = () => {
//     clearTimeout(TLights1Handler);
//   };

//   useEffect(() => {
//     setTimeout(TLights1Handler, 1000);
//   });

//   function lightRestartHandler() {
//     if (TLights1 === 3) {
//       setTLights1(1);
//     }
//   }

//   const trafficLight1 = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     position: 'relative',
//     top: '60px',
//     left: '300px',
//     backgroundColor: '#333',
//     width: '60px',
//     height: '200px',
//   };

//   const trafficLight2 = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     position: 'relative',
//     top: '300px',
//     left: '300px',
//     backgroundColor: '#333',
//     width: '60px',
//     height: '200px',
//   };

//   const redLight = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50px',
//     backgroundColor: TLights1 === 3 ? 'red' : 'rgb(113, 37, 37)',
//   };

//   const yellowLight = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50px',
//     backgroundColor: TLights1 === 2 ? 'rgb(255, 255, 0)' : 'rgb(104, 104, 14)',
//   };
//   const greenLight = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50px',
//     backgroundColor: TLights1 === 1 ? 'rgb(20, 197, 20)' : 'rgb(6, 67, 6)',
//   };

//   return (
//     <>
//       <button onClick={clearTimer}>Stop</button>
//       <div style={trafficLight1}>
//         <object style={redLight}></object>
//         <object style={yellowLight}></object>
//         <object style={greenLight}></object>
//       </div>
//       <div style={trafficLight2}>
//         <object style={redLight}></object>
//         <object style={yellowLight}></object>
//         <object style={greenLight}></object>
//       </div>
//     </>
//   );
// }

export default App;
