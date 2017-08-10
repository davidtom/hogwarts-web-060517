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

  changeIcon(state){
    let iconIndex = sortIcons.indexOf(state)
    if (iconIndex === 2){
      return 0
    } else {
      return iconIndex+1
    }
  }

  passUpNameSort = () => {
    let direction = this.state.sortNameIcon.split(' ')[1]
    this.props.onSortToggle(['name', direction])
  }

  passUpWeightSort = () => {
    let direction = this.state.sortWeightIcon.split(' ')[1]
    this.props.onSortToggle(['weightRatio', direction])
  }

  toggleNameSort = (event) => {
    this.setState({
      sortNameIcon: sortIcons[this.changeIcon(this.state.sortNameIcon)],
      sortWeightIcon: sortIcons[0]
    }, this.passUpNameSort )
  }

  toggleWeightSort = (event) => {
    this.setState({
      sortWeightIcon: sortIcons[this.changeIcon(this.state.sortWeightIcon)],
      sortNameIcon: sortIcons[0]
    }, this.passUpWeightSort )
  }

  sortButtons(){
    return (
      <div className="ui buttons" style={{display: 'inline-block'}}>
        <button className="ui primary button" onClick={this.toggleNameSort}><i className={this.state.sortNameIcon}></i>Sort Name</button>
        <button className="ui primary button" onClick={this.toggleWeightSort}><i className={this.state.sortWeightIcon}></i>Sort Weight</button>
      </div>
    )
  }

  greaseBtnClicked = (event) => {
    let greaseFilter = event.target.innerText.toLowerCase()
    this.props.toggleGreaseFilter(greaseFilter)
  }

  greaseButtons(){
    return (
      <div className="ui buttons" style={{display: 'inline-block'}}>
        <button onClick={this.greaseBtnClicked} className="ui button">Greased</button>
        <button onClick={this.greaseBtnClicked} className="ui button">All</button>
        <button onClick={this.greaseBtnClicked} className="ui button">NotGreased</button>
      </div>
    )
  }

  render(){
    return (
      <div>
          {this.sortButtons()}
          {this.greaseButtons()}
      </div>
    )
  }
}

export default Filter
