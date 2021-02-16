import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PampeService } from 'src/app/services/pampe.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Pampe } from 'src/interfaces/interfaces';
import * as moment from 'moment';

moment.locale('es');

@Component({
  selector: 'app-pampe',
  templateUrl: './pampe.page.html',
  styleUrls: ['./pampe.page.scss'],
})
export class PAMPEPage implements OnInit {

  pampe = {
    text: ''
  }

  constructor(private NavCtrl: NavController, private uiService: UiServiceService, private pampeService: PampeService) { }

  ngOnInit() {

  }

  async qtdd(fQtdd: NgForm) {

    const today = moment();
    console.log(today.format('dddd Do MMMM YYYY'));
    const sw = await this.pampeService.getPampeDay(today.format('dddd Do MMMM YYYY'));
    console.log(sw);

    if (sw) {
      if (fQtdd.invalid) { return; }

      const valid = await this.pampeService.getPampe(this.pampe.text);
      console.log(valid);

      if (valid) {
        //Move to page
        this.NavCtrl.navigateRoot('/qtdd', { animated: true });
      } else {
        //Show Alert
        this.uiService.presentAlert('Hey! Dios te quiere decir algo, sigue intentando...');
      }

    } else {
      this.uiService.presentAlert('Ya realizaste tu TASCD de hoy!');
    }
   


  }

}
