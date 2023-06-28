import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { FormUtil } from '../../../shared/util/form.util';
import { ProfileService } from '../../services/profile.service';
import { RegisterService } from '../../services/register.service';
import { ResponseLoginDto } from '../login/dto/response-login.dto';
import { UserRegisterDto } from '../register/dto/user-register.dto';
import { SessionService } from '../../../shared/services/session.service';
import { Profile } from './dto/profile.dto';
import { ResponseConfigDto } from '../settings/dto/response-config.dto';
import { AppConfiguration } from '../login/dto/dto/app.configuration.dto';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends FormUtil implements OnInit {

  profile: Profile = {
    firstName: '',
    lastName: '',
    email: '',
    appConfiguration: new AppConfiguration
  };

  constructor(private router: Router, protected injector: Injector, private profileService: ProfileService) {
    super(injector);
  }

  async ngOnInit() {
    const userId = await this.sessionService.getUserId();
    const resp = await this.profileService.profile(userId).toPromise() as ResponseApiDto;
    this.profile = resp.data;
    console.log(this.profile);
  }

  protected formBuilderGroup(): { [key: string]: any } {
    return {

    };
  }

  protected async onSubmitAction(): Promise<void> {
    return this.save();
  }

  private async save(): Promise<void> {
      const profileDto: Profile = this.formValues();
      const res: ResponseConfigDto = await this.profileService.save(this.formValues()).toPromise() as ResponseConfigDto;
      if (!res?.message == null) {
        await this.utilService.showToast({ message: 'Registro Exitoso', type: ErrorType.info });
      } else {
        await this.utilService.showToast({ message: 'Error', type: ErrorType.error });
      }
  }

}
