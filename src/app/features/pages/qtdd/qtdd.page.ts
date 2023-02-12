import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { QtddService } from '../../services/qtdd.service';
import { ResponseQtddDto } from './dto/response-qtdd.dto';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-qtdd',
  templateUrl: './qtdd.page.html',
  styleUrls: ['./qtdd.page.scss'],
})
export class QtddPage implements OnInit {

  public qtdd!: Array<ResponseQtddDto>;

  constructor(private menu: MenuController, private qtddService: QtddService, private sessionService: SessionService) { }

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
    const userId = await this.sessionService.getUserId();
    this.qtdd = await this.qtddService.qtdd(userId).toPromise() as Array<ResponseQtddDto>;
  }

}
