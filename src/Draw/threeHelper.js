import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class ThreeHelper {

    constructor(width, height) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.camera.position.set(0, 500, 500);
        this.camera.lookAt(this.scene.position);
        this.scene.background = new THREE.Color(0x000000);
        this.mouseLeftDown = false
        this.mousePosition = []

        let controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.maxPolarAngle = Math.PI * 0.5;  
    }

    line(points = [], color = 0xdddddd) {

        let material = new THREE.LineBasicMaterial({ color });
        let linePoints = [];

        for (let i of points) {
            linePoints.push(new THREE.Vector3(i[0], i[1], i[2]))
        }

        let geometry = new THREE.BufferGeometry().setFromPoints(linePoints);
        let line = new THREE.Line(geometry, material);

        line.name = "drawline";
        this.scene.add(line.clone())

        console.log(this.scene.children)
    }

    clear() {
        this.scene.remove(this.scene.children[1])
    }

    animate() {
        let animate = this.animate;
        requestAnimationFrame(animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    getRendererDom() {
        return this.renderer.domElement;
    }

    coordinate() {
        let grid = new THREE.GridHelper(500, 50);        
        grid.name = 'coords'
        this.scene.add(grid)
    }

}