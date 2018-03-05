import React from 'react'
import Nail from './Nail'
import Tone from 'tone'

class FingerObject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
  	const {hand, finger, zoom, nailColor, skinColor, sound} = this.state;
  	// console.log(finger);
  	// const fingersType = ['Pouce','Index','Majeur','Annulaire','Oriculaire'];
  	let leftSide;

  	if (hand['type'] === "left"){
		leftSide = finger['type'] === 0 ? zoom : zoom - ((finger['type'] - 1) * zoom / 4) - zoom / 4
  	} else {
  		leftSide = finger['type'] === 0 ? - (zoom)/5 : (finger['type'] - 1) * zoom / 4 + (zoom / 4 / 7)
  	}
  	// if (hand.type === "right" && !finger.extended){
  	// 	sound.setNote(hand.palmPosition[1] + 100 - (40 * finger.type));
  	// }

  	// console.log(finger)

  	let style = {
  		position: "absolute",
  		// float:"left",
  		top: finger['type'] === 0 ? 0 : (finger.extended ? -zoom/1.5 : -10) + 15,
  		height: (finger.extended ? zoom / 1.5 :finger.type !== 0?10:0),
  		width:zoom / 5,
  		borderRadius:30,
  		transition:"height 1s",
  		backgroundColor:skinColor,
  		left: leftSide,
  		transformOrigin:-5
  		// transform: `rotate(${finger.direction[0] * 100}deg)`
  	}

  	return (
  		<div>
	  		<div style={style}>
	  		{
	  			finger['type'] !== 0 ?
	  				<Nail finger={finger} zoom={zoom} nailColor={nailColor} />
	  			:
	  			""
	  		}
	  		</div>
  		</div>
  	)
  }
}

export default FingerObject;

// {fingersType[finger['type']]}