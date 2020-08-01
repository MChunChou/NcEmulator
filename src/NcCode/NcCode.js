import React, { useState, useRef} from 'react';
import './index.css'

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

    function handleOnChange(evt) {
        let value = evt.target.value
        let lines = value.split(/[\n\r]/g)
        let linesLen = lines.length;        
        
        setLine(linesLen)
        setCode && setCode(lines);
    }

    function handleScroll(evt){            
        lineRef.current.scrollTop = evt.target.scrollTop;
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