import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import { ThreeHelper } from './threeHelper.js'

function Draw(props) {    
    let [mount, setMount] = useState(null);
    let [initFlag, setInitFlag] = useState(false);
    let [threeHelper, setThreeHelper] = useState(null);
    let { lines } = props

    const mountRef = useCallback(node => {
        if (node !== null) {            
            setMount(node)
        }
    });


    function renderThree(){

        let height = mount.getBoundingClientRect().height;
        let width = mount.getBoundingClientRect().width;
    
        let threeHelper = new ThreeHelper(width, height);
        threeHelper.coordinate();            
        mount.appendChild(threeHelper.getRendererDom())
        threeHelper.animate();
        setInitFlag(true);
        setThreeHelper(threeHelper);                            

    }

    function updateThree(){
        if(mount && threeHelper){                    
            mount.firstChild && mount.removeChild(mount.firstChild);            
            let {width, height} = mount.getBoundingClientRect();
            threeHelper.changeDom(width, height);
            mount.appendChild(threeHelper.getRendererDom());
        }
    }

    let init = () => {
        if (mount && !initFlag) {            
            renderThree();                       
        }        
    }
        
    if (lines.length > 0) {
        threeHelper.clear();        
        threeHelper.line(lines);
    }

    useEffect(() => {
        init();  
        
        window.addEventListener("resize", ()=>{             
            updateThree();
        });

        return window.removeEventListener("resize", ()=>{});
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