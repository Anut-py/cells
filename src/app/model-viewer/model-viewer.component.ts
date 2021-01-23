import {
    Component,
    Input,
    AfterViewInit,
    ViewChild,
    ElementRef,
    OnChanges,
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
export class ModelViewerComponent implements AfterViewInit, OnChanges {
    @ViewChild('container') container: ElementRef;

    @Input() ratio = 1;
    @Input() modelName: string;
    loader: OBJLoader;
    matLoader: MTLLoader;
    scene: THREE.Scene;
    light1: THREE.PointLight;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    model: THREE.Group;
    first = true;

    constructor() {}

    ngAfterViewInit(): void {
        this.loader = new OBJLoader();
        this.matLoader = new MTLLoader();
        this.scene = new THREE.Scene();
        this.light1 = new THREE.PointLight(0xffffff, 0.75);
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(
            this.ratio * window.innerWidth,
            this.ratio * window.innerHeight
        );
        this.light1.position.set(20, 20, 20);
        this.scene.add(this.light1);
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 5;
        this.camera.position.set(20, 20, 20);
        this.camera.lookAt(0, 0, 0);
        this.controls.update();
        this.scene.background = new THREE.Color(0xffffff);

        this.container.nativeElement.appendChild(this.renderer.domElement);
        this.matLoader.load(
            `/assets/models/${this.modelName}.mtl`,
            (mat) => {
                this.loader.setMaterials(mat);
                this.loader.load(
                    `/assets/models/${this.modelName}.obj`,
                    (model) => {
                        this.model = model;
                        this.scene.add(this.model);
                        this.animate();
                    }
                );
            },
            undefined,
            () => {
                this.loader.load(
                    `/assets/models/${this.modelName}.obj`,
                    (model) => {
                        this.model = model;
                        this.scene.add(this.model);
                        this.animate();
                    }
                );
            }
        );
        this.first = false;
    }

    ngOnChanges(): void {
        if (!this.first) {
            this.scene.remove(this.model);
            this.matLoader.load(
                `/assets/models/${this.modelName}.mtl`,
                (mat) => {
                    this.loader.setMaterials(mat);
                    this.loader.load(
                        `/assets/models/${this.modelName}.obj`,
                        (model) => {
                            this.model = model;
                            this.scene.add(this.model);
                            this.animate();
                        }
                    );
                },
                undefined,
                () => {
                    this.loader.load(
                        `/assets/models/${this.modelName}.obj`,
                        (model) => {
                            this.model = model;
                            this.scene.add(this.model);
                            this.animate();
                        }
                    );
                }
            );
        }
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.light1.position.set(
            this.camera.position.x,
            this.camera.position.y,
            this.camera.position.z
        );
        this.renderer.render(this.scene, this.camera);
        // tslint:disable-next-line: semicolon
    };
}
