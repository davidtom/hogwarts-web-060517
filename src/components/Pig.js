import React from "react"
// import {Card} from "semantic-ui-react"

class Pig extends React.Component {
  constructor() {
    super()

    this.state = {
      displayCardInfo: false,
      display: 'inline-block'
    }

  }

  pigFileName(){
    // From browser, coming from public directory!!
    return "./hog-imgs/" + this.props.pig.name.toLowerCase().split(" ").join("_") + ".jpg"
  }

  toggleDisplay = () => {
    this.setState({
      displayCardInfo: !this.state.displayCardInfo
    })
  }

  terminatePig = (event) => {
    this.setState({
      display: 'none'
    })
  }

  render(){
    return(
      <div className="ui card" style={{display: this.state.display, marginLeft: "10px", marginRight: "10px"}}>
        <div className="image" onClick={this.toggleDisplay} >
          <img src= {this.pigFileName()} />
        </div>
        <div className="content">
          <a className="header">{this.props.pig.name}</a>
          <div className="meta">
            <p>Specialty: {this.props.pig.specialty}</p>
          </div>
          {this.state.displayCardInfo && <div className="description">
            <strong>Weight Ratio*:</strong> {this.props.pig.weightRatio}
            <br />
            <strong>Greased:</strong> {this.props.pig.greased.toString()}
          </div>}
        </div>
        <div className="extra content">
          <div style={{float: 'left'}}>
            <i className="trophy icon"></i>
            {this.props.pig.highestMedalAchieved}
          </div>
          <div style={{float: 'right'}}>
            <i className="trash outline icon" onClick={this.terminatePig}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Pig
