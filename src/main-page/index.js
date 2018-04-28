import React, { Component } from 'react';
import logo from './logo.png';
import './main-page.css';
import Header from './header'

class App extends Component {

  /* function to fetch our houses data */
  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }

  /* function picking a random house from a list of houses */
  determineFeaturedHouse = () => {
    if (this.allHouses){
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse});
    };
  }
  render() {
    return (
      /* render the imported header component  */
      <div className="container">
        <Header subtitle="Modern Luxurious Apartments"/>
      </div>
    );
  }
}

export default App;
