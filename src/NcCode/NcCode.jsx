import React, { useState, useRef, useEffect } from 'react';
import './index.css'
const initCode = `G90 G00 X -20. Y -20.
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
const initTestCode = `G00 X0.Y0.Z0.
G02X-100.Y100.Z15.R115.
G02X0Y100.Z0R55.
G02X100.Y100.Z15.R55.
G02X0Y0Z0R115.
M02`

function NcCode(props) {
    let { setCode } = props
    let [line, setLine] = useState(initTestCode.split(/[\n\r]/g).length);
    let [value, setValue] = useState(initTestCode);
    let lineRef = useRef(null);

    useEffect(() => {
        setCode(value)
    })

    function renderLines() {
        let lines = []

        for (let i = 1; i <= line; i++) {
            lines.push(<div key={`line-${i}`}>{i}.</div>)
        }

        return lines
    }

    function handleScroll(evt) {
        lineRef.current.scrollTop = evt.target.scrollTop;
    }

    function handleOnChange(evt) {
        let v = evt.target.value
        let lines = value.split(/[\n\r]/g)
        let linesLen = lines.length;

        setLine(linesLen)
        setValue(v)
    }

    return <section className='nccode center'>
        <div className="line-nums code-style" ref={lineRef}>
            {renderLines()}
        </div>
        <div className="cnc-code center">
            <textarea
                className='code-style resize-none'
                value={value}
                onChange={handleOnChange}
                onScroll={handleScroll} />
        </div>
    </section>
}

export default NcCode 