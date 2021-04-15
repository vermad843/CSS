import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
        <div className = "header">
            <h1>Go</h1>
            <p>Goa</p>
            <h2>Gone</h2>
        </div>
        <div className = "banner">
            <h1>Hello</h1>
            <p>Good Afternoon</p>
        </div>
        <div className = "card">
           <h1>Card</h1>
           <input/>
        </div>
        <div className = "box">
           <img
             src = "http://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
             />
             <h1>Image</h1>
        </div>
        <div className = "searchResult">
           <img
             src = "http://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
              />
        </div>
    </div>
  );
}

export default App;
