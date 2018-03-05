import React from 'react';
import Button from './css/buttons.css'
import Radium from 'radium'

const MenuHeader = ({changeAppMode, mode}) => {
    let style = {
    	position:"fixed",
        width:"100vw",
        height:"50px",
        background:"#efefef",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
    return (
        <div style={style}>
		  <button key="findColorButton" style={[Button.base , Button.default, (mode === "findcolor") ? Button.active:null ]} onClick={() => changeAppMode("findcolor")}>Find Color Game</button>
		  <button key="thereminButton" style={[Button.base , Button.default,(mode === "theremin") ? Button.active:null ]} onClick={() => changeAppMode("theremin")}>Theremin</button>
		{/*<button key="pulsatorButton" style={[Button.base , Button.default,(mode === "pulsator") ? Button.active:null ]} onClick={() => changeAppMode("pulsator")}>Pulsator</button>*/}
		</div>
    )
}

export default Radium(MenuHeader);