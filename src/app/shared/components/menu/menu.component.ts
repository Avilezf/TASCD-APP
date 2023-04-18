import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { MenuDto } from './dto/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pages: MenuDto[] = [];
  name: string = '';
  fire: string = '0';

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.getUserName();
    this.getFire();
  }

  async logout(): Promise<void> {
    this.sessionService.logout().then(e => {
      this.router.navigateByUrl('/login');
    });

  }

  async getUserName(){
    this.name = await this.sessionService.getUserName();
  }

  async getFire(){
    this.fire = await (await this.sessionService.getUserConfiguration()).fire!;
    console.log(this.fire);
  }

}