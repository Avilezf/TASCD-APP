import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseHomeDto } from '../pages/home/dto/response-home.dto';
import { ResponseQtddDto } from '../pages/qtdd/dto/response-qtdd.dto';
import { StorageService } from '../../shared/services/storage.service';
import { SessionService } from '../../shared/services/session.service';
import { PampeDto } from '../pages/pampe/dto/pampe.dto';
import { ResponsePampeDto } from '../pages/pampe/dto/response-pampe.dto';


@Injectable({
  providedIn: 'root'
})
export class PampeService {

  private readonly urlEndPoint: string = 'pampe';

  constructor(private http: HttpClient) {
  }

  public pampe(pampe: PampeDto): Observable<ResponsePampeDto> {
    return this.http.post<ResponsePampeDto>(`${environment.urlServer}/${this.urlEndPoint}/`, pampe);
  }

  public isPampeDone(userId: string): Observable<ResponsePampeDto> {
    return this.http.get<ResponsePampeDto>(`${environment.urlServer}/${this.urlEndPoint}/${userId}`);
  }

}
