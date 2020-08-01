import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import { ThreeHelper } from './threeHelper.js'

function Draw(props) {
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);
    let [mount, setMount] = useState(null);
    let [initFlag, setInitFlag] = useState(false);
    let [threeHelper, setThreeHelper] = useState(null);
    let { lines } = props

    const mountRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().width)
            setMount(node)
        }
    });

    let init = () => {

        if (mount && !initFlag) {
            console.log('Draw init');
            let threeHelper = new ThreeHelper(width, height);
            threeHelper.coordinate();            
            mount.appendChild(threeHelper.getRendererDom())
            threeHelper.animate();
            setInitFlag(true);
            setThreeHelper(threeHelper);
        }

    }
    
    if (lines.length > 0) {
        threeHelper.clear();
        threeHelper.line(lines);
    }

    useEffect(() => {
        init()
    })

    return <section className='draw relative'>        
        <div            
            className='draw-main relative'
            ref={mountRef}
        />
        <div className='draw-notice'>
            Notice: This is using WebGL
            <br />
            Support WebGL : {window.WebGLRenderingContext ? 'True' : 'False'}
        </div>
    </section>
}

export default Draw 