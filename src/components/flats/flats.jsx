import React, {Component} from 'react'

import Flat from './flat'

class Flats extends Component {
  constructor (props) {
    super(props)

  }

  listOfFlats() {
    return Array.from(this.props.flats).map((flat)=>{
      return <Flat selectFlat={this.props.selectFlat} flat={flat} key={flat.name}/>
    })
  }

  render () {
    return (this.listOfFlats())
  }

}

export default Flats