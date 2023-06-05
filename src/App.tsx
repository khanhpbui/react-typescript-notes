import React from 'react';
import './App.css';
import SayHello from './components/BasicProps';
import AdvancedProps from './components/AdvancedProps';
import Typing from './components/Typing';
import ReactComponent from './components/ReactComponent';

function App() {
  const nameObject={
    first: "Khanh",
    last: "Bui"
  }
  return (
    <div className="App">
    {/* Typing.tsx */}
     <Typing name={"Cosmo"} />

    {/* BasicProps.tsx */}
     <SayHello personName={nameObject} friendRequestCount={2} isLoggedIn={true} />

     {/* AdvancedProps.tsx */}
     <AdvancedProps status={'error'} />

      {/* ReactComponent.tsx */}
     <ReactComponent>Hello</ReactComponent>

     
        </div>
  );
}

export default App;
