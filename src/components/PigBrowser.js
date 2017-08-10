import React from "react"
import Pig from "./Pig"

class PigBrowser extends React.Component {
  constructor() {
    super()
  }

  createPigComponents(){
    return this.props.pigs.map((pig, index) => <Pig pig={pig} key={index}/>)
  }

  render(){
    return(
      <div>
        {this.createPigComponents()}
      </div>
    )
  }
}

export default PigBrowser
