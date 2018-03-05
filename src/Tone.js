import React from 'react'
import { withLeapContainer } from 'react-leap'
import SingleTone from './SingleTone'

const ToneObject = ({frame, sound}) => {

	return (
		<div>
			{
				(frame && frame.hands) ?
				(
					frame.hands.map((hand) =>  {
						<div>
						<span>coucou</span>
						<SingleTone sound={sound} key={hand} init={hand}/>

					</div>
				})
					):
				""
			}
		</div>
	)
}

export default withLeapContainer(ToneObject)