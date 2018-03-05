import React, { Component } from 'react';
import { LeapProvider } from './LeapProvider'
import Tone from 'tone'
import Radium from 'radium'
import MenuHeader from './MenuHeader'
import Test from './Test'
import ToneObject from './ToneObject'
import BackgroundColor from './BackgroundColor'
import FindColorGame from './FindColorGame'
import VideoWrapper from './VideoWrapper'
import Button from './css/buttons.css'
import Input from './css/input.css'
import logo from './logo.svg'
import './App.css'



class App extends Component {
  constructor(props){
    super(props);
    let theSound = new Tone.DuoSynth().toMaster();

    // theSound.triggerAttackRelease(200,"0n");

    this.state = {
      nailColor: "#CD4442",
      skinColor: "#e3c3b0",
      sound: theSound,
      avoidPlay: false,
      score: 0,
      objectiveColor: {
        red:100,
        green:100,
        blue:100
      },
      releaseTime:"1t",
      mode:"theremin",
      soundMode:["theremin","pulsator"]
    }

    this.state.sound.triggerAttack(200);

    this.handleChangeSkinColor = this.handleChangeSkinColor.bind(this);
    this.handleChangeNailColor = this.handleChangeNailColor.bind(this);
    this.handleStopSound = this.handleStopSound.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.changeAppMode = this.changeAppMode.bind(this);
  }

  handleChangeNailColor(event) {
    this.setState({
      nailColor : event.target.value
    });
  }

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    })
  }

  handleChangeSkinColor(event) {
    this.setState({
      skinColor : event.target.value
    });
  }

  getRandomColor(){
    return Math.floor(Math.random()  * (240 - 30) + 30);
  }

  handleChangeObjectiveColor() {
    const newColor = {
      red:this.getRandomColor(),
      green:this.getRandomColor(),
      blue:this.getRandomColor()
    }

    // setTimeout(() =>
      this.setState({
        objectiveColor:newColor,
        score:this.state.score + 1
      })
    //   ,1000
    // );
  }

  handleStopSound(){
    this.setState({
      avoidPlay: !this.state.avoidPlay,
      playPauseButtonBg: this.state.avoidPlay ? "red":"green"
    });
    this.state.avoidPlay ? this.state.sound.triggerAttack(200):this.state.sound.triggerRelease();
  }

  componentDidUpdate(prevProps,prevState){
    if (this.state.mode === "theremin" && !this.state.avoidPlay){
      this.state.sound.triggerAttack(200);
    } else {
      this.state.sound.triggerRelease();
    }

    if (prevState.score !== this.state.score){
      this.setState({
        score:prevState.score + 1
      })
    }
  }

  changeAppMode(newMode){
    if (this.state.mode !== newMode){
      this.setState({
        mode:newMode
      })
    }
  }

  setReleaseTime(time){
    if (this.state.releaseTime !== time){
      this.setState({
        releaseTime: time
      })
    }
  }

  render() {
    return (
      <div className="App" style={{"display":"flex","flexFlow": "row"}}>
        
        <MenuHeader mode={this.state.mode} changeAppMode={(mode) => this.changeAppMode(mode)}/>
        
        <LeapProvider options={{enableGestures: true}}>
          {
            (this.state.mode === "findcolor")?
            <BackgroundColor objectiveColor={this.state.objectiveColor} goalReached={() => this.handleChangeObjectiveColor()} />
            :<VideoWrapper />
          }
          
          <div style={{"position":"absolute", "zIndex":2, top:"50px", display:"flex", flexFlow:"row", alignContent:"space-evenly", justifyContent:"space-evenly", width: "100%"}}>
            {/*<button onClick={() => this.handleChangeObjectiveColor()}>
            Change color
            </button>*/}
            
            {
              (this.state.soundMode.indexOf(this.state.mode) > -1)?<ToneObject sound={this.state.sound} />:null
            }
            
            <div style={{display:"flex", flexFlow:"column", alignItems:"center", width: "20%", padding:"15px"}}>
                SETTINGS
                <div key="nailcolor"  style={Input.container}>
                  <label key="labelNailColor" style={Input.label} for="nailcolor">Nail color (css name or hex)</label>
                  <input key="inputNailColor" style={Input.text} type="text" id="nailcolor" onChange={this.handleChangeNailColor}/>
                </div>
                
                <div key="skincolor" style={Input.container}>
                  <label key="labelSkinColor" style={Input.label} for="skincolor">Skin color (css name or hex)</label>
                  <input key="inputSkinColor" style={Input.text} type="text" id="skincolor" onChange={this.handleChangeSkinColor}/>
                </div>
                {
                  (this.state.soundMode.indexOf(this.state.mode) > -1)?
                    <div style={Button.container}>
                      <button key="playStopButton" style={[Button.base ,(this.state.avoidPlay ? Button.green : Button.red)]} onClick={() => this.handleStopSound()}>{
                        this.state.avoidPlay ? <span>Play</span>:<span>Stop playing</span>
                      }</button>
                    </div>
                  :<FindColorGame objectiveColor={this.state.objectiveColor} score={this.state.score}/>
                }
            </div>
            <div style={{display:"flex", flexFlow:"column", alignItems:"center", alignContent:"space-around", justifyContent:"space-around", width:"70%", padding:"15px"}}>
              {/*style={{"display":"flex","flexGrow":10}}*/}
              <Test setReleaseTime={(time) => this.setReleaseTime(time)} releaseTime={this.state.releaseTime} mode={this.state.mode} avoidPlay={this.state.avoidPlay} skinColor={this.state.skinColor} nailColor={this.state.nailColor} sound={this.state.sound}/>
            </div>
          </div>
        </LeapProvider>
      </div>
    );
  }
}

App = Radium(App);

export default App;
