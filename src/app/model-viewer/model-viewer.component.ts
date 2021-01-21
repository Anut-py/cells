import {
    Component,
    Input,
    AfterViewInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
@Component({
    selector: 'app-model-viewer',
    templateUrl: './model-viewer.component.html',
    styleUrls: ['./model-viewer.component.scss'],
})
export class ModelViewerComponent implements AfterViewInit {
    @ViewChild('container') container: ElementRef;

    @Input() ratio = 1;
    @Input() modelName: string;

    constructor() {}

    ngAfterViewInit(): void {
        const loader = new OBJLoader();
        const matLoader = new MTLLoader();
        const scene = new THREE.Scene();
        const light1 = new THREE.PointLight(0xffffff);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(
            this.ratio * window.innerWidth,
            this.ratio * window.innerHeight
        );
        light1.position.set(20, 20, 20);
        scene.add(light1);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;
        camera.position.set(20, 20, 20);
        camera.lookAt(0, 0, 0);
        controls.update();
        scene.background = new THREE.Color(0xffffff);

        this.container.nativeElement.appendChild(renderer.domElement);
        function animate(): void {
            requestAnimationFrame(animate);
            controls.update();
            light1.position.set(
                camera.position.x,
                camera.position.y,
                camera.position.z
            );
            renderer.render(scene, camera);
        }
        matLoader.load(`/assets/models/${this.modelName}.mtl`, (mat) => {
            loader.setMaterials(mat);
            loader.load(`/assets/models/${this.modelName}.obj`, (model) => {
                scene.add(model);
                animate();
            });
        });
    }
}
