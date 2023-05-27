import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseHomeDto } from '../pages/home/dto/response-home.dto';
import { ResponseQtddDto } from '../pages/qtdd/dto/response-qtdd.dto';
import { StorageService } from '../../shared/services/storage.service';
import { SessionService } from '../../shared/services/session.service';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';


@Injectable({
  providedIn: 'root'
})
export class QtddService {

  private readonly urlEndPoint: string = 'home/diary';

  constructor(private http: HttpClient) {
  }

  public qtdd(UserId: string, page: number): Observable<ResponseApiDto> {
    return this.http.get<ResponseApiDto>(`${environment.urlServer}/${this.urlEndPoint}/${UserId}?page=${page}`);
  }

}
