import * as THREE from 'three'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'

export class ThreeHelper {

    constructor(width, height) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.camera.position.set(0, 1000, 0);
        this.camera.lookAt(this.scene.position);
        this.scene.background = new THREE.Color(0x000000);
        this.mouseLeftDown = false
        this.mousePosition = []

        // create object3D 
        this.object = new THREE.Object3D();
        this.object.rotateX(-Math.PI / 2);
        this.scene.add(this.object);

        // add OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enablePan = false;

        // add axesHelper
        this.axesHelper = new THREE.AxesHelper(300);
        this.axesHelper.position.set(0, 0, 5);
        this.object.add(this.axesHelper);
    }

    line(points = [], color = 0xdddd0d) {
        let material = new THREE.LineBasicMaterial({
            color
        });
        let linePoints = [];

        for (let i of points) {
            linePoints.push(new THREE.Vector3(i[0], i[1], i[2]))
        }

        let geometry = new THREE.BufferGeometry().setFromPoints(linePoints);
        let line = new THREE.Line(geometry, material);

        line.name = "drawline";
        this.object.add(line.clone())
    }

    clear() {
        this.object.remove(this.object.getObjectByName('drawline'))
    }

    remove() {
        cancelAnimationFrame(this.animateID);
    }

    animate() {
        let animate = this.animate;
        this.animateID = requestAnimationFrame(animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    getRendererDom() {
        return this.renderer.domElement;
    }

    coordinate() {
        let grid = new THREE.GridHelper(1000, 50);
        grid.name = 'coords'
        this.scene.add(grid)
    }

    setCameraOrigin() {
        this.camera.position.set(0, 0, 1000);
    }

    changeDom(width, height) {
        this.canvas = this.getRendererDom();
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
}
