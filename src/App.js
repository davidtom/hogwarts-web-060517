import React, { Component } from 'react';
import './App.css';
import Hogs from "./porkers_data"
import Nav from './components/Nav'
import Filter from './components/Filter'
import PigBrowser from './components/PigBrowser'

class App extends Component {

  constructor(){
    super()
    console.log('1', Hogs)
    this.state = {
      hogs: Hogs,
      filters: {
        sort: ["none"],
        greased: "all"
      }
    }
  }

  onSortToggle = (sortArr) =>{
    this.setState({
        filters: {
          ...this.state.filters,
          sort: sortArr
        }
      }, () => { this.setState({
        hogs: this.sortHogs()
      })}
    )
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

  onGreaseToggle = (greaseFilter) => {
    console.log('2', Hogs)
    let greaseBool = 'all'
    if (greaseFilter === 'greased') {
      greaseBool = true
    } else if (greaseFilter === 'notgreased') {
      greaseBool = false
    }
    this.setState({
      filters: {
        ...this.state.filters,
        greased: greaseBool
      }
    }, this.filterHogs )
  }

  filterHogs = () => {
    console.log('3', Hogs)
    if (this.state.filters.greased === 'all'){
      this.setState({
        hogs: Hogs
      })
    } else {
      console.log('4', Hogs)
      let filteredHogs = Hogs.filter((hog) => {
        console.log('5', Hogs)
        console.log('one hogs grease status', hog.greased)
        return hog.greased === this.state.filters.greased
      })
      this.setState({
        hogs: filteredHogs
      })
    }
  }

  sortHogs = () => {
    if (this.state.filters.sort[1] === "ascending") {
      return this.sortAscending(this.state.hogs, this.state.filters.sort[0])
    } else if (this.state.filters.sort[1] === "descending") {
      return this.sortDescending(this.state.hogs, this.state.filters.sort[0])
    } else {
      return this.state.hogs
    }
  }


  render() {
    return (
      <div className="App">
        < Nav />
        < Filter onSortToggle={this.onSortToggle} toggleGreaseFilter={this.onGreaseToggle}/>
      < PigBrowser pigs={this.sortHogs()}/>
        <p>*Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</p>
      </div>
    )
  }
}

export default App;
