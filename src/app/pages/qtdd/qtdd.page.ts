import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PampeService } from 'src/app/services/pampe.service';
import { Pampe } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-qtdd',
  templateUrl: './qtdd.page.html',
  styleUrls: ['./qtdd.page.scss'],
})
export class QTDDPage implements OnInit {

   pampe : Pampe[];

  constructor(private menu: MenuController, private pampeService: PampeService) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async ngOnInit() {
   const sw = await this.pampeService.getPampeQTDD();
   if (sw){
    this.pampe = this.pampeService.pampeResponse.pampe;
   }

  }

}
