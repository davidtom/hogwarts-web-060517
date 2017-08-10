import React from "react"
// import {Card} from "semantic-ui-react"

class Pig extends React.Component {
  constructor() {
    super()

    this.state = {
      displayCardInfo: false
    }
  }

  pigFileName(){
    // From browser, coming from public directory!!
    return "./hog-imgs/" + this.props.pig.name.toLowerCase().split(" ").join("_") + ".jpg"
  }

  toggleDisplay = event => {
    this.setState({
      displayCardInfo: !this.state.displayCardInfo
    })
  }

  render(){
    return(
      <div className="ui card" onClick={this.toggleDisplay} style={{display: 'inline-block', marginLeft: "10px", marginRight: "10px"}}>
        <div className="image">
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
          <a>
            <i className="trophy icon"></i>
            {this.props.pig.highestMedalAchieved}
          </a>
        </div>
      </div>
    )
  }
}

export default Pig
