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

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {

  }

  async logout(): Promise<void> {
    console.log('out')
    await this.sessionService.logout();
    this.router.navigateByUrl('/login');
  }

}
