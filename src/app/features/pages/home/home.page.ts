import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { ResponseHomeDto } from './dto/response-home.dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  htmlVerse: ResponseHomeDto = new ResponseHomeDto();

  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit(){
    this.getVerse();
  }

  async getVerse() {
    this.htmlVerse = await this.homeService.home().toPromise() as ResponseHomeDto;
    console.log(this.htmlVerse);
  }

  pampe(){
    this.router.navigate(['/pampe']);
  }

}
