import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseLoginDto } from '../../core/pages/login/dto/response-login.dto';
import { StorageService } from './storage.service';
import { AppConfiguration } from '../../core/pages/login/dto/dto/app.configuration.dto';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly key: string = 'data';
  private readonly defaultValue: any = null;

  constructor(private storeService: StorageService, private router: Router) {
  }

  async saveDataSession(data: ResponseLoginDto): Promise<void> {
    await this.storeService.set(this.key, data);
  }

  async getToken(): Promise<string> {
    const data: ResponseLoginDto = await this.getDataSession();
    return data?.tokenDto?.accessToken || this.defaultValue;
  }

  async getUserId(): Promise<string> {
    const data: ResponseLoginDto = await this.getDataSession();
    return data?.tokenDto?.userId || this.defaultValue;
  }

  async getUserName(): Promise<string> {
    const data: ResponseLoginDto = await this.getDataSession();
    return data?.userLoginDto?.name || this.defaultValue;
  }

  async getUserConfiguration(): Promise<AppConfiguration> {
    const data: ResponseLoginDto = await this.getDataSession();
    return data?.userLoginDto?.appConfiguration || this.defaultValue;
  }

  async getRefreshToken(): Promise<string> {
    const data: ResponseLoginDto = await this.getDataSession();
    return data?.tokenDto?.refreshToken || this.defaultValue;
  }

  async isAuthenticated(): Promise<boolean> {
    const token: string = await this.getToken();
    const payload = this.getPayLoadToken(token);

    if (token && payload?.iss
      && payload?.exp && new Date(payload.exp * 1000) >= new Date()) {
      return true;
    }

    return false;
  }

  async logout(): Promise<void> {
    await this.storeService.remove(this.key);
  }

  async getDataSession(): Promise<ResponseLoginDto> {
    return await this.storeService.get(this.key);
  }

  private getPayLoadToken(token: string): any {
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

}
