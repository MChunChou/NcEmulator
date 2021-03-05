import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import NcCode from './NcCode/NcCode.jsx'
import Draw from './Draw/Draw.jsx'
import Dialog from './Dialog/Dialog.jsx'
import GmCode from 'gmcode'

const dialogCtn = `
  模擬 GM code 路徑，結尾需有 M02 
  目前支援以下 code 
  ‧ G00 X Y Z
  ‧ G01 X Y Z  
  ‧ G02 Z Y Z R (測試中)
  ‧ M02
  ‧ G90 G91  
`

function App() {
  let [code , setCode] = useState(null);

  let lines = [];
  let gm = new GmCode();    

      if(code && code.match(/[mM]0?2/)) {    
          try{
            let parser = gm.parser(code);            
            let path = gm.toPath(parser);            
            if(path.length > 0){
              for(let p of path){
                lines.push([p.x, p.y, p.z]);
              }
            }
          }catch (e){
           console.error(e);
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
        <Dialog 
          open={true}
          content={dialogCtn}></Dialog>
      </main>
    </div>
  );
}

export default App;
