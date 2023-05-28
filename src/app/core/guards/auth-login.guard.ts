import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard  {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  async canLoad(): Promise<boolean> {
    const isAuthenticated: boolean = await this.sessionService.isAuthenticated();
    if (isAuthenticated) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }
    return true;
  }

}
