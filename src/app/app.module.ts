import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TokenInterceptor } from './core/handler/token.handler';
import { HttpErrorInterceptor } from './core/handler/http-error.handler';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

const modules: QuillModule = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],        // toggled buttons
    //['strike','blockquote', 'code-block'],

//   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],

//    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
//    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
//    [{ 'direction': 'rtl' }],                         // text direction

    //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//    [{ 'font': [] }],
    [{ 'align': [] }],

    //['link','image','video']
    //['clean']
  ]
}


@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    QuillModule.forRoot({
      format: 'html',
      modules: modules,
      placeholder: 'Escribe aquí lo que te dijo Dios',
      scrollingContainer: '#scrolling-container',
      theme: 'bubble'
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
