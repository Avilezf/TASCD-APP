import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { ResponseHomeDto } from './dto/response-home.dto';
import { SessionService } from '../../../shared/services/session.service';
import { timeout } from 'rxjs';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';

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
    const response = await this.homeService.home().toPromise() as ResponseApiDto;
    this.htmlVerse = response.data;
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
