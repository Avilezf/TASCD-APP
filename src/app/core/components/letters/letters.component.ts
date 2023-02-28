import { ResponseConfigDto } from './../../pages/settings/dto/response-config.dto';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/session.service';
import { AppConfiguration } from '../../pages/login/dto/dto/app.configuration.dto';
import { ProfileService } from '../../services/profile.service';
import { UserSaveConfiguration } from '../../pages/settings/dto/user-save-configuration.dto';
import { TokenDto } from '../../pages/login/dto/dto/token.dto';
import { ResponseLoginDto } from '../../pages/login/dto/response-login.dto';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {

  appConfiguration: AppConfiguration = {
    fontFamily: 'Segoe UI',
    fontSize: '14',
    fire: '0',
    theme: ''
  };

  constructor(private sessionService: SessionService, private profileService:ProfileService) { }

  ngOnInit() {
    this.getConfiguration();
  }

  pinFormatter(value: number) {
    return `${value}px`;
  }

  async changePin(event: any){
    document.documentElement.style.setProperty('--ion-font-size', event.target.value.toString()+'px');
    await this.saveFontSize(event.target.value.toString());
  }

  async changeText(event: any){
    document.documentElement.style.setProperty('--ion-font-family', event.target.value);
    await this.saveFontFamily(event.target.value);
  }

  async getConfiguration() {
    let appConfigurationTemp = await this.sessionService.getUserConfiguration();
    console.log(appConfigurationTemp);
    if(appConfigurationTemp != null) {
      this.appConfiguration = appConfigurationTemp;
    }
  }

  async saveFontSize(value: string): Promise<void>{
    this.appConfiguration.fontSize = value;
    let userSaveConfiguration: UserSaveConfiguration = {
      userId: await this.sessionService.getUserId(),
      appConfiguration: this.appConfiguration
    }
    let msg: ResponseConfigDto = await this.profileService.saveConfig(userSaveConfiguration).toPromise() as ResponseConfigDto;
    let responseLoginSaved: ResponseLoginDto = await this.sessionService.getDataSession();
    responseLoginSaved.userLoginDto.appConfiguration = userSaveConfiguration.appConfiguration;
    this.sessionService.saveDataSession(responseLoginSaved);
    console.log(msg.message);
  }

  async saveFontFamily(value: string){
    this.appConfiguration.fontFamily = value;
    let userSaveConfiguration: UserSaveConfiguration = {
      userId: await this.sessionService.getUserId(),
      appConfiguration: this.appConfiguration
    }
    let msg: ResponseConfigDto = await this.profileService.saveConfig(userSaveConfiguration).toPromise() as ResponseConfigDto;
    let responseLoginSaved: ResponseLoginDto = await this.sessionService.getDataSession();
    responseLoginSaved.userLoginDto.appConfiguration = userSaveConfiguration.appConfiguration;
    this.sessionService.saveDataSession(responseLoginSaved);
    console.log(msg.message);
  }
}
