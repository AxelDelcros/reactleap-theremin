import React from 'react'
import FingerObject from './FingerObject'
import Tone from 'tone'

class HandObject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      temperedNotes : [264.00, 279.70, 296.33, 313.95, 332.62, 352.40, 373.35, 395.55, 419.07, 443.99, 470.39, 498.37, 528.00]
    }
  }

  getNewNote(note){

  }

  checkClosedHand(){
  	const { sound, mode, temperedNotes, releaseTime } = this.state;
  	const hand = this.state.init;
  	let hasOneFingerExtended = hand.fingers.some((finger,index) => {
  		if (finger.extended){
			return true;
  		}
  	})
  	if (!hasOneFingerExtended){
  		sound.triggerRelease();
  		sound.volume.value = 0;
  	} else{
  		if (sound.volume.value === 0){
  			if (mode === "pulsator"){
  				sound.triggerAttackRelease(temperedNotes[ Math.floor(hand.palmPosition[1] / (480/temperedNotes.length)) ], releaseTime );
  			} else {
  				sound.triggerAttack(hand.palmPosition[1] + 100);	
  			}
  			
  			sound.volume.value = 30 - parseFloat(hand.palmPosition[1]/10)
  		}
  		if (mode === "theremin"){
  			sound.setNote(hand.palmPosition[1] + 100);	
  		} else {
  			sound.setNote( temperedNotes[ Math.floor(hand.palmPosition[1] / (480/temperedNotes.length)) ] );
  		}
   	}
  }

  render() {
  	const hand = this.state.init;
  	const {nailColor,skinColor, sound, setReleaseTime, releaseTime, avoidPlay, mode} = this.state;

  	let color = skinColor;
  	let finalWidth = (window.innerWidth * (Math.floor(hand.palmPosition[0]) + 270)) / 600;
  	let finalHeight = ((window.innerHeight - 50) * (Math.floor(hand.palmPosition[2]) + 300)) / 600;
  	let zoom = 200 - Math.floor(hand.palmPosition[1]) / 2;
  	

  	if (this.state.mode === "theremin" && !avoidPlay){
  		if (hand['type'] === 'right'){
	  		this.checkClosedHand();
	  	} else{
	  		sound.volume.value = 30 - parseFloat(hand.palmPosition[1]/10);
	  	}
  	} else if (this.state.mode === "pulsator" && !avoidPlay){
  		if (hand['type'] === 'right'){
	  		this.checkClosedHand();
	  	} else{
	  		console.log(releaseTime);
	  		if (hand.palmPosition[1]/20 > 0 && releaseTime !== Math.floor(hand.palmPosition[1]/20)+"t"){
				setReleaseTime(Math.floor(hand.palmPosition[1]/20)+ "t");
			}
	  		
	  	}
  	}

	let style = {
		width:zoom,
		height:zoom,
		backgroundColor:color,
		position:"absolute",
		borderRadius:"10px 10px 50px 50px",
		left:finalWidth,
		top: finalHeight,
		transform: `rotate(${hand.direction[0] * 100}deg)`,
	};  	
  	return (
  		<div style={style}>
  			{
  				(hand.fingers && hand.fingers.length > 0) ?
  					hand.fingers.map( (finger) => <FingerObject sound={sound} nailColor={nailColor} skinColor={skinColor} key={finger} hand={hand} finger={finger} zoom={zoom}/> )
  				:
  					""
  			}
  		</div>
  	)
  }
}

export default HandObject;