import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  
  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 38.2324, lng: -122.6367},
      zoom: 11
    });
    window.mapObject = map;
  }


  loadScript() {
    let scriptElement = this.createMapScript();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    script.parentNode.insertBefore(scriptElement, script);
    window.initMap = this.initMap;
  }


  createMapScript() {
    try {
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyA3wYVIVaYpJfSb4cAkMH1-0DYh9P70Pgc";
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;

    return mapScript;
    } catch (error) {
      alert("Error loading page...")
    }
  }

  

  render() {
    this.loadScript();

    return (
      <div className="App">
        <Header />
        <Content />
      <footer tabIndex="0"><p>Site made with <a href="https://developers.google.com/maps/documentation/javascript/tutorial">Google Maps</a> and <a href="https://developer.foursquare.com/">Foursquare</a> APIs</p></footer>
      </div>

      
    );
  }
}


export default App;
