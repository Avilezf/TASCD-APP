import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, MenuController } from '@ionic/angular';
import { QtddService } from '../../services/qtdd.service';
import { ResponseQtddDto } from './dto/response-qtdd.dto';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-qtdd',
  templateUrl: './qtdd.page.html',
  styleUrls: ['./qtdd.page.scss'],
})
export class QtddPage implements OnInit {

  public qtdd: Array<ResponseQtddDto> = [];
  public count: number = 1;
  loaded: boolean = false;

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
    this.getQtdd(1);
  }

  async getQtdd(num: number) {
    const userId = await this.sessionService.getUserId();
    let mapqtdd: Array<ResponseQtddDto> = await this.qtddService.qtdd(userId, num).toPromise() as Array<ResponseQtddDto>;
    mapqtdd.map(e => {
      this.qtdd.push(e);
    });
    if(this.qtdd.length != 0){
      this.loaded = true;
    }
  }

  async onIonInfinite(ev: any) {
    this.count++;
    await this.getQtdd(this.count);
    (ev as InfiniteScrollCustomEvent).target.complete();
  }

}
