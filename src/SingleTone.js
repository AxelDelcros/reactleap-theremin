import React from 'react'
import Tone from 'tone'

class SingleTone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	...props
    }
  }

  componentDidMount(){
  }

  render() {
  	const {init,sound} = this.state;
  	//sound.setNote(init.palmPosition[1]);

  	return (
  		<span></span>
  	)
  }
}

export default SingleTone;