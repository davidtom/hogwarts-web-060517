import React, { Component } from 'react';
import './App.css';
import Hogs from "./porkers_data"
import Nav from './components/Nav'
import Filter from './components/Filter'
import PigBrowser from './components/PigBrowser'

class App extends Component {

  constructor(){
    super()

    this.state = {
      filters: {
        name: "none",
        weight: "none",
        greased: "all"
      }
    }
  }

  sortDescending(array, attribute){
    return array.sort(function(a, b){
      if(a[attribute] < b[attribute]) return 1;
      if(a[attribute] > b[attribute]) return -1;
      return 0;
    })
  }

  sortAscending(array, attribute){
    return array.sort(function(a, b){
      if(a[attribute] < b[attribute]) return -1;
      if(a[attribute] > b[attribute]) return 1;
      return 0;
    })
  }

  getHogs(){
    return this.sortAscending(Hogs, "weightRatio")
  }



  render() {
    return (
      <div className="App">
        < Nav />
        < Filter />
        < PigBrowser pigs={this.getHogs()}/>
        <p>*Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</p>
      </div>
    )
  }
}

export default App;
