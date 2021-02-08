import React, { useState, useRef } from 'react';
import './index.css'
const initCode = `
G90 G00 X -20. Y -20.
G01 X0 Y0
Y35.
X20.
G03 X25. Y60. R65.
G02 X65. R -25.
G03 X70. Y35. R65.
G01 X90.
Y0.
X45. Y10.
X0 Y0
X -20. Y -20.
M02`;

function NcCode(props) {
    let {setCode} = props
    let [line, setLine] = useState(1);
    let lineRef = useRef(null);

    function renderLines() {
        let lines = []

        for (let i = 1; i <= line; i++) {
            lines.push(<div key={`line-${i}`}>{i}.</div>)
        }

        return lines
    }

    function handleScroll(evt){            
        lineRef.current.scrollTop = evt.target.scrollTop;
    }
    
    function handleOnChange(evt) {
        let value = evt.target.value
        let lines = value.split(/[\n\r]/g)
        let linesLen = lines.length;        
            
        setLine(linesLen)
        setCode && setCode(value);
    }


    return <section className='nccode center'>
        <div className="line-nums code-style" ref={lineRef}>            
            {renderLines()}            
        </div>
        <div className="cnc-code center">
            <textarea
                className='code-style resize-none'
                onChange={handleOnChange}
                onScroll={handleScroll} />
        </div>
    </section>
}

export default NcCode 