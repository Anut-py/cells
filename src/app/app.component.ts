import { Component, OnInit, TemplateRef } from '@angular/core';
import { Vector3 } from 'three';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'school-project';
    files = ['http://localhost:4200/assets/models/donut.obj'];

    constructor() {}

    ngOnInit(): void {}
}
