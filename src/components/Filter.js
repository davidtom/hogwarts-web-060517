import React from "react"

const sortIcons = ["sort icon", "sort ascending icon", "sort descending icon"]

class Filter extends React.Component {

  constructor() {
    super()
    this.state = {
      sortNameIcon: "sort icon",
      sortWeightIcon: "sort icon"
    }
  }

  // TODO once a sort is applied to one of these, "clear" the other
  changeIcon(state){
    let iconIndex = sortIcons.indexOf(state)
    if (iconIndex === 2){
      return 0
    } else {
      return iconIndex+1
    }
  }

  toggleNameSort = (event) => {
    this.setState({
      sortNameIcon: sortIcons[this.changeIcon(this.state.sortNameIcon)]
    })
  }

  toggleWeightSort = (event) => {
    this.setState({
      sortWeightIcon: sortIcons[this.changeIcon(this.state.sortWeightIcon)]
    })
  }

  sortButtons(){
    return (
      <div>
        <button className="ui primary button" onClick={this.toggleNameSort}><i className={this.state.sortNameIcon}></i>Sort Name</button>
        <button className="ui primary button" onClick={this.toggleWeightSort}><i className={this.state.sortWeightIcon}></i>Sort Weight</button>
      </div>
    )
  }

  render(){
    return (
      <div>
        {this.sortButtons()}
      </div>
    )
  }
}

export default Filter
