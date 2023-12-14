import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AutoModeSharpIcon from '@mui/icons-material/AutoModeSharp';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import logo from './logo.svg';
import Osho from './osho.png';
import './App.css';

const App = () => {
  const [count, setCount] = useState(1);
  const [dir, setDir] = useState(1);

  const incDec = (clear) => {
    if (count === 6) {
      setDir(- 1);
    }
    else if (count === 2){
      setDir(1)
    }
    setCount(count + dir);
    if (clear) {
      setCount(1);
      setDir(1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
          <img src={Osho} className="osho-title"/>
          <h1 className="title">Chakra</h1>
          <h1 className="title">Sounds Meditation</h1>
          <div className="info">
            <h1 className="title">Counter</h1>
            <Tooltip title={<h1 style={{ color: "white" }}>Click step every time the music tone changes.  The counter will keep track of which chakra you are on.</h1>}>
              <InfoIcon sx={{ fontSize: 40}}/>
            </Tooltip>
          </div>
          <Badge badgeContent={count} color="primary" overlap="circular" sx={{ "& .MuiBadge-badge": { fontSize: 59, height: 75, minWidth: 75, color: 'black' } }}>
            <AutoModeSharpIcon sx={{ fontSize: 140}}/>
          </Badge>
          <div className="button-group">
            <Button onClick={() => {incDec();}} variant="outlined" style={{fontWeight: '1000', maxWidth: '130px', maxHeight: '70px', minWidth: '130px', minHeight: '70px', fontSize: '30px', backgroundColor: 'white'}}>Step</Button>
            <div className="button-group-spacer" />
            <Button variant="outlined" onClick={() => incDec(true)} style={{maxWidth: '130px', maxHeight: '70px', minWidth: '130px', minHeight: '70px', fontSize: '30px', backgroundColor: "black"}}>Clear</Button>
          </div>
    
      </header>
    </div>
  );
}

export default App;
