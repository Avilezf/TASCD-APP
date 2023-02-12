import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { QtddService } from '../../services/qtdd.service';
import { ResponseQtddDto } from './dto/response-qtdd.dto';

@Component({
  selector: 'app-qtdd',
  templateUrl: './qtdd.page.html',
  styleUrls: ['./qtdd.page.scss'],
})
export class QtddPage implements OnInit {

  public qtdd!: Array<ResponseQtddDto>;

  constructor(private menu: MenuController, private qtddService: QtddService) { }

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

  ngOnInit() {
    this.getQtdd();
  }

  async getQtdd() {
    this.qtdd = await this.qtddService.qtdd().toPromise() as Array<ResponseQtddDto>;
  }

}
