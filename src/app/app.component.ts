import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  loading: HTMLIonLoadingElement;
  user: User = {
    apellido: '',
    _id: '',
    nombre: '',
    email: '',
    password: ''
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    private loginService: LoginService,
    public loadingController: LoadingController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getUser():boolean {
    if(this.loginService.token == null){
      return false;
    }else{
      this.user = this.loginService.user;
      return true;
    }    
  }

  logout() {
    this.presentLoading();
    setTimeout(() => {
      this.loading.dismiss();
      this.loginService.logout();
    }, 1000);
   
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Hasta Pronto!...',
    });
    await this.loading.present();
  }
}
