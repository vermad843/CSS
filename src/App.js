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
        <div className = "decoration">
           <h1>Text Decoration</h1>
        </div>
        <div className = "amazon">
           <img
              src =  "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_1500x600._CB407658174_.jpg"          
             />
        </div>
    </div>
  );
}

export default App;
