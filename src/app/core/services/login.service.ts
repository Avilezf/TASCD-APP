import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseLoginDto } from '../pages/login/dto/response-login.dto';
import { UserLoginDto } from '../pages/login/dto/user-login.dto';
import { AppConfiguration } from '../pages/login/dto/dto/app.configuration.dto';
import { ResponseConfigDto } from '../pages/settings/dto/response-config.dto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlEndPoint: string = 'auth/login';

  constructor(private http: HttpClient) {
  }

  public login(userLoginDto: UserLoginDto): Observable<ResponseLoginDto> {
    return this.http.post<ResponseLoginDto>(`${environment.urlServer}/${this.urlEndPoint}`, userLoginDto);
  }

}
