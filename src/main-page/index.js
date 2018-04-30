import React, { Component } from 'react';
import logo from './logo.png';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house'
import HouseFilter from './house-filter';

class App extends Component {
  /* initialize component state */
  state = {}

 /* component life cycle location to fetch data */
 componentDidMount() {
   this.fetchHouses();
 }

  /* function to fetch our houses data */
  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
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

  determineUniqueCountries = () => {
    const countries = this.allHouses
    ? Array.from(new Set(this.allHouses.map(h => h.country)))
    : [];
    countries.unshift(null);
    this.setState({ countries })
  }
  /* filter houses on drop down functionality */
  filterHouses = (country) => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter((h) => h.country)
    this.setState({ filteredHouses });
    this.setState({ country });
  }


  /* set active house implementation */
  setActiveHouse = (house) => {
    this.setState({ activeHouse: house });

  }

  render() {
    return (
      /* render the imported header component  */
      <div className="container">
        <Header subtitle="Modern Luxurious Apartments"/>
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses}/>
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
