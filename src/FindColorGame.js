import React from 'react'


const FindColorGame = ({objectiveColor, score}) => {
	return (
		<div style={{width:"100%",display:"flex",flexFlow:"column",alignItems:"center"}}>
			<div style={{background:`rgb(${objectiveColor.red},${objectiveColor.green},${objectiveColor.blue})`,display:"flex", justifyContent:"space-around", alignItems:"center",width:"calc(100% - 10px)",height:"100px",borderRadius:"5px"}}></div>
			<div style={{fontSize:"20px",fontFamily:"futura", fontWeight:"bold"}}>Score : {score}</div>
		</div>
	)

}

export default FindColorGame;