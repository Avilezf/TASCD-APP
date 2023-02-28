
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConfiguration } from '../pages/login/dto/dto/app.configuration.dto';
import { ResponseConfigDto } from '../pages/settings/dto/response-config.dto';
import { UserSaveConfiguration } from '../pages/settings/dto/user-save-configuration.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly urlEndPoint: string = 'users';

  constructor(private http: HttpClient) {
  }

  public saveConfig(userSaveConfiguration: UserSaveConfiguration){
    return this.http.post<ResponseConfigDto>(`${environment.urlServer}/${this.urlEndPoint}/config`, userSaveConfiguration);
  }

}
