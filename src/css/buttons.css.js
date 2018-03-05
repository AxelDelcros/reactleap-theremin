const Button = {
	container :{
		padding:"5px"
	},
	base :{
		fontFamily:"neue einstellung",
		padding:"8px 15px",
		borderRadius:"5px",
		color:"white",
		fontSize:"16px",
		border:"none",
		cursor:"pointer",
		':focus' :{
			outline:"none"
		},
		':active' :{
			outline:"none"
		}
	},
	default: {
		background:"#888",
	},
	active: {
		background:"#555"
	},
	green: {
      	background:"#99d693",
      	transition:"all .3s",
      	":hover":{
      		background:"#95c394",
      		transition:"all .3s"
      	}
  	},
  	red: {
      	background:"#CD4442",
      	transition:"all .3s",
      	":hover":{
      		background:"#ac4946",
      		transition:"all .3s"
      	}
  	}
}

export default Button