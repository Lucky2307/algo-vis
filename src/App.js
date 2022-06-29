import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ReverseLinkedList from './pages/ReverseLinkedList';
import Test from './pages/Test';

function App() {
  // Input string, separated by linebreaks
  // Similar to any online IDE
  function run(data) {

  }
  let defaultData = '';
  let component;
  switch (window.location.pathname) {
    case "/reverselinkedlist":
      component = <ReverseLinkedList />;
      defaultData = '[1,2,3,4,5,6,7]';
      break;
    case "/test":
      component = <Test />;
      break;
    default:
      component = <h1>Nothing here</h1>;
      break;
  }
  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='screen'>
          {React.cloneElement(component, { run: (data) => this.run(data) })}
        </div>
        <div className='options'>
          <div className='optionsContainer'>
            <div className='inputContainer'>
              <div className='optionLabel'>Input:</div>
              <textarea className='dataInput' placeholder={defaultData} rows="4" ></textarea>
              <button className='runBtn'>Run!</button>
            </div>
            <div className='algoContainer'>
              <div className='optionLabel'>Algorithm:</div>
              <textarea className='algoArea'></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;
