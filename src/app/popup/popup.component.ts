import {
    AfterViewInit,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit, AfterViewInit {
    @ViewChild('modal', { read: TemplateRef }) template: TemplateRef<any>;

    slideTitles = [
        'Welcome!',
        'Choosing a cell type',
        'Selecting organelles',
        'Viewing 3D models',
    ];

    slide = 1;

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.modalRef = this.modalService.show(this.template, {
            animated: true,
        });
    }

    nextSlide(): void {
        this.slide++;
        if (this.slide > this.slideTitles.length) {
            this.modalRef.hide();
        }
    }

    previousSlide(): void {
        this.slide--;
    }
}
