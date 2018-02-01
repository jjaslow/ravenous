import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp.js';

/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

const business2 = {
  imageSrc: 'http://mimosadigital.onlineprintsolutions.com/Files/BrokerBranding/Mimosa/Include/ref.jpg',
    name: 'Pook Diner',
    address: '102 Park Ave',
    city: 'Hoboken',
    state: 'NJ',
    zipCode: '07030',
    category: 'Chinese',
    rating: 4.85,
    reviewCount: 888
};

const businesses = [business, business2, business2, business, business, business2];
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state={businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(business => this.setState({business: business}))
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous bunny</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>


    );
  }
}

export default App;
