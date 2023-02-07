import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseHomeDto } from '../pages/home/dto/response-home.dto';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly urlEndPoint: string = 'home/';

  constructor(private http: HttpClient) {
  }

  public home(): Observable<ResponseHomeDto> {
    return this.http.get<ResponseHomeDto>(`${environment.urlServer}/${this.urlEndPoint}`);
  }

}
