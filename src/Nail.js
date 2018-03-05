import React from 'react'

class Nail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
  	const {finger, zoom, nailColor} = this.state;
  	const fingersType = ['Pouce','Index','Majeur','Annulaire','Oriculaire'];
  	let leftSide;

  	let style = {
  		position: "absolute",
  		// float:"left",
  		display:(finger.extended)?'visible':'none',
  		top: -5,
  		height: zoom / 7,
  		width:zoom / 7,
  		borderRadius:"30px 30px 25px 25px",
  		transition:"height 1s",
  		backgroundColor:nailColor,
  		left: 3,
  		transformOrigin: - 5,
  		// transform: `rotate(${finger.direction[0] * 100}deg)`
  	}

  	return (
	  	<div style={style}></div>
  	)
  }
}

export default Nail;

// {fingersType[finger['type']]}