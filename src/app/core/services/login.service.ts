import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';
import { environment } from 'src/environments/environment';
import { UserLoginDto } from '../pages/login/dto/user-login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlEndPoint: string = 'auth/login';

  constructor(private http: HttpClient) {
  }

  public login(userLoginDto: UserLoginDto): Observable<ResponseApiDto> {
    return this.http.post<ResponseApiDto>(`${environment.urlServer}/${this.urlEndPoint}`, userLoginDto);
  }

}
