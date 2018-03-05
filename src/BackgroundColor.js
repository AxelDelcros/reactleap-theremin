import React from 'react'
import { withLeapContainer } from 'react-leap'

const BackgroundColor = ({frame, goalReached,objectiveColor}) => {
	let hands = [];
	let red = 255,
	green = 255,
	blue = 255,
	opacity = 1;
	const difficulty = 20;

	if (frame && frame.hands){
		hands = frame.hands;
	}

	for (var i = hands.length - 1; i >= 0; i--) {
		if (hands[i].type === "right"){
			red =  Math.floor ( hands[i].palmPosition[1] * 255 / 400);
			green = Math.floor ( (hands[i].palmPosition[0] + 200) * 255 / 400);
			blue = Math.floor ( (hands[i].palmPosition[2] + 200) * 255 / 400);
			// console.log("hands[i].palmPosition[2]",(Math.floor(hands[i].palmPosition[2] + 200) * 255 / 400))
			// console.log("red,green,blue",red,green,blue)
			if (red - objectiveColor.red < difficulty && green - objectiveColor.green < difficulty && blue - objectiveColor.blue < difficulty){
				console.log("red,green,blue",red,green,blue)
				goalReached();
			}
		} else {
			opacity = 1.3 - hands[i].palmPosition[1.1] / 300;
		}
	}


	let style = {
		background:`rgba(${red},${green},${blue},${opacity})`,
		position:"absolute",
		width:"100vw",
		height:"calc(100vh - 50px)",
		top:"50px",
		zIndex:"1"
	}

	return <div style={style}></div>
}

export default withLeapContainer(BackgroundColor)