import { Injectable } from '@angular/core';

import { SessionService } from 'src/app/shared/services/session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private sessionService: SessionService) {
  }

  async canActivate(): Promise<boolean> {
    const isAuthenticated: boolean = await this.sessionService.isAuthenticated();
    if (!isAuthenticated) {
      await this.sessionService.logout();
      return false;
    } else {
      return true;
    }
  }

}
