import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerUser: User = {
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private loginService: LoginService,  private NavCtrl: NavController, private uiService: UiServiceService) { }

  ngOnInit() {
  }

  async register( fRegister: NgForm){

    if( fRegister.invalid ) { return; }

    const valid = await this.loginService.getRegister( this.registerUser);

    if( valid ) {
      //Move to page
      this.NavCtrl.navigateRoot('/login', { animated: true})
    }else{
      //Show Alert
      this.uiService.presentAlert('Ese correo electronico ya existe')

    }
  }
}
