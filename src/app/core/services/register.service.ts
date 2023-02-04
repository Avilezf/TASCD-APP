import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseLoginDto } from '../pages/login/dto/response-login.dto';
import { UserRegisterDto } from '../pages/register/dto/user-register.dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly urlEndPoint: string = 'auth/register';

  constructor(private http: HttpClient) {
  }

  public register(userRegisterDto: UserRegisterDto): Observable<ResponseLoginDto> {
    return this.http.post<ResponseLoginDto>(`${environment.urlServer}/${this.urlEndPoint}`, userRegisterDto);
  }

}
