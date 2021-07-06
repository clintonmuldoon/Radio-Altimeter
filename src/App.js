import React, { useEffect, useState } from 'react';
import './App.css';
import scale from './assets/radaltback.png';
import cover from './assets/radaltcover.png';
import needle from './assets/radaltneedle.png';
import bugImg from './assets/bug.png';
import flagImg from './assets/radaltflag.png';

function App() {
  const [check, setCheck] = useState(false)
  const [Altitude, setAltitude] = useState(0)
  const [Bug, setBug] = useState(0)
  const [needlevalue, setNeedlevalue] = useState(0)
  const [trianglevalue, setTrianglevalue] = useState(0)
  function changeCheck() {
    setCheck(!check)

  }
  function ChangeAlt(event) {
    setAltitude(event.target.value)
    if (Altitude <= 500 && check == true) {
      setNeedlevalue(Math.round((180 / 500) * Altitude))
    }
    if (Altitude > 500 && check == true) {
      setNeedlevalue(Math.round((90 / 1000) * (Altitude - 500) + 180))
    }
  }
  function ChangeBug(event) {
    setBug(event.target.value)
    if (Bug <= 500) {
      setTrianglevalue(Math.round((180 / 500) * Bug))
    }
    else {
      setTrianglevalue(Math.round((90 / 1000) * (Bug - 500) + 180))
    }
  }
  return (
    <div>
      <div className='parent'>
        <h1>Radar Altimeter</h1>
        <img className='scale' src={scale}></img>
        {check == false && <img className='flagImg' src={flagImg}></img>}
        {Altitude <= 500 && <img className='needle' src={needle} style={{ transform: 'rotate(' + needlevalue + 'deg)' }}></img>}
        {Altitude > 500 && <img className='needle' src={needle} style={{ transform: 'rotate(' + needlevalue + 'deg)' }}></img>}
        <img className='cover' src={cover}></img>
        {check == true && needlevalue > trianglevalue && <div className='redlight'></div>}
        {Bug <= 500 && <img className='bugImg' src={bugImg} style={{ transform: 'rotate(' + trianglevalue + 'deg)' }}></img>}
        {Bug > 500 && <img className='bugImg' src={bugImg} style={{ transform: 'rotate(' + trianglevalue + 'deg)' }}></img>}
      </div>
      <footer className='footer'>
        <div><label>Altitude:</label><input className='AltitudeSlider' type='range' min='0' max='1500' defaultValue={Altitude} onChange={ChangeAlt}
        /><label>{Altitude}</label></div>
        <div><label for='BugSlider' className='BugLabel'>Bug:</label><input className='BugSlider' type='range' min='0' max='1500' defaultValue={Bug} onChange={ChangeBug}
        /><label>{Bug}</label></div>
        <div><label for='PowerCheckBox' className='PowerLabel'>  Has power: </label><input className='PowerCheckBox' type='checkbox' value={check} onChange={changeCheck}
        /></div>
      </footer>
    </div >
  );
}

export default App;
