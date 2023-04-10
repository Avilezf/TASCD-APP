import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { ResponseHomeDto } from './dto/response-home.dto';
import { SessionService } from '../../../shared/services/session.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  htmlVerse: ResponseHomeDto = new ResponseHomeDto();
  loaded: boolean = false;

  constructor(private router: Router, private homeService: HomeService, private sessionService:SessionService) {
  }

  ngOnInit(){
    this.getVerse();
    this.getConfiguration();
  }

  async getVerse() {
    this.htmlVerse = await this.homeService.home().toPromise() as ResponseHomeDto;
    if(this.htmlVerse.html != ''){
      this.loaded = true;
    }
  }

  async getConfiguration() {
    let appConfiguration = await this.sessionService.getUserConfiguration();
    if(appConfiguration != null){
      document.documentElement.style.setProperty('--ion-font-size', appConfiguration.fontSize+'px');
      document.documentElement.style.setProperty('--ion-font-family', appConfiguration.fontFamily+'');
    }
  }

  pampe(){
    this.router.navigate(['/pampe']);
  }


}
