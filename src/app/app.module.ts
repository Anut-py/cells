import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    declarations: [AppComponent, ModelViewerComponent, PopupComponent],
    imports: [BrowserModule, CommonModule, ModalModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
