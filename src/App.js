import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import NcCode from './NcCode/NcCode.js'
import Draw from './Draw/Draw.js'

function App() {
  let [code , setCode] = useState(null)

  let lines = []
  
  if(code) {
    for(let c of code){
      if(c.match(/G0?[01]\s*(X|x)-?[0-9]+(\.[0-9]+)?(Y|y)-?[0-9]+(\.[0-9]+)?(Z|z)-?[0-9]+(\.[0-9]+)?/g)){
        let x = c.match(/(?:X|x)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[xX]/,'');
        let y = c.match(/(?:Y|y)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[yY]/,'');
        let z = c.match(/(?:Z|z)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[zZ]/,'');    
        lines.push([x,y,z]) 
      }
    }        
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="app-main">
        <div id='draw-nc-code'>
          <NcCode setCode={setCode}/>         
        </div>
        <div id="draw-emulator">
          <Draw lines={lines}/>
        </div>
      </main>
    </div>
  );
}

export default App;
