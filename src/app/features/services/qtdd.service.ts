import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseHomeDto } from '../pages/home/dto/response-home.dto';
import { ResponseQtddDto } from '../pages/qtdd/dto/response-qtdd.dto';


@Injectable({
  providedIn: 'root'
})
export class QtddService {

  private readonly urlEndPoint: string = 'home/diary';
  private readonly emailUser: string = 'luis.llanos9@gmail.com';

  constructor(private http: HttpClient) {
  }

  public qtdd(): Observable<Array<ResponseQtddDto>> {
    return this.http.get<Array<ResponseQtddDto>>(`${environment.urlServer}/${this.urlEndPoint}/${this.emailUser}`);
  }

}
