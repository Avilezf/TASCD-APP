import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private NavCtrl: NavController, private uiService: UiServiceService) { }

  ngOnInit() {
  }

  async login( fLogin: NgForm ) {
    
    if( fLogin.invalid) { return;}

    const valid = await this.loginService.getLogin( this.loginUser.email, this.loginUser.password);
    console.log(valid);

    if( valid ) {
      //Move to page
      this.NavCtrl.navigateRoot('/home', { animated: true});
    }else{
      //Show Alert
      this.uiService.presentAlert('Usuario y contraseña no son correctos.');

    }
    
  }

}
