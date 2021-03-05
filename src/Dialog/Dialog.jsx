import React, { useState } from 'react';
import './index.css'

function Dialog({ open = false , content=``}) {    
    const [openFlag, setOpen] = useState(open);

    function dialogClose (evt){
        setOpen(false)
    }

    return <div className={`dialog ${ openFlag? 'grid' : 'hidden' }`}>
        <div className="content dialog-minwidth dialog-minheight">
            {content.split(/[\r\n]+/g).map((v, i)=>{
                return <div key={i}>{v}</div>
            })}
        </div>
        <div className="control dialog-minwidth ">
            <label htmlFor="dialog-close">Close</label>
            <button id="dialog-close" className="hidden" onClick = {dialogClose}></button>
        </div>
    </div>
}

export default Dialog;