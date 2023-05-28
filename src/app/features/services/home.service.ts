import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly urlEndPoint: string = 'home/';

  constructor(private http: HttpClient) {
  }

  public home(): Observable<ResponseApiDto> {
    return this.http.get<ResponseApiDto>(`${environment.urlServer}/${this.urlEndPoint}`);
  }

}
