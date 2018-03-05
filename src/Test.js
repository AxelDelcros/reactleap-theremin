import React from 'react'
import { withLeapContainer } from 'react-leap'
import Title from './css/title.css'
import HandObject from './HandObject'
import logoCoddity from './img/logoCoddity.png'
import logoTextCoddity from './img/logoTextCoddity.png'

const Test = ({mode, nailColor, skinColor, frame, sound, avoidPlay,setReleaseTime, releaseTime}) => {	

	const styleLogoCoddity = {
		width:200,
		height:200
	}

	const styleLogoTextCoddity = {
		width:200
	}

	return (
		<div>
			{
				(frame && frame.hands && frame.hands.length > 0) ?
				(
					frame.hands.map((hand) =>  <HandObject setReleaseTime={ (time) => setReleaseTime(time) } releaseTime={releaseTime} avoidPlay={avoidPlay} mode={mode} sound={sound} skinColor={skinColor} nailColor={nailColor} key={hand} init={hand} />)
				):
				(frame && frame.hands && frame.hands.length === 0) ?
				<div>
					<div style={Title.centerTitle}>
						Place a hand over the little device on the desk.<br/>
						{
							(mode === "theremin")?<div><span>Left hand : Volume, Right hand : Frenquency</span><br/></div>:null
						}
						{
							(mode === "findcolor")?<div><span>(Right hand only)</span><br/></div>:null
						}
						{
							(mode === "pulsator")?<div><span>Left hand : BPM, Right hand : notes</span><br/></div>:null
						}
						<span style={{"fontSize":"20px","fontStyle":"italic"}}>(As device, I mean the leap motion, not your phone or the computer !)</span>
					</div>
					<div style={{display:"flex",flexFlow:"column",alignItems: "center",justifyContent: "center"}}>
						<img src={logoCoddity} style={styleLogoCoddity} />
						<img src={logoTextCoddity} style={styleLogoTextCoddity} />
					</div>
				</div>
				:
				<span>Please connect a Leap Motion to use this app</span>
			}
		</div>
	)
}

export default withLeapContainer(Test)