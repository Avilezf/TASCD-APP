import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { FormUtil } from '../../../shared/util/form.util';
import { RegisterService } from '../../services/register.service';
import { ResponseLoginDto } from '../login/dto/response-login.dto';
import { UserRegisterDto } from '../register/dto/user-register.dto';
import { UserResetPasswordDto } from './dto/user-reset-password.dto';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage extends FormUtil implements OnInit {


  constructor(private router: Router, protected injector: Injector, private registerService: RegisterService) {
    super(injector);
  }

  ngOnInit() {
  }

  protected formBuilderGroup(): { [key: string]: any } {
    return {
      email: ['', Validators.required],
    };
  }

  protected async onSubmitAction(): Promise<void> {
    return this.register();
  }

  private async register(): Promise<void> {
    const userResetPasswordDto: UserResetPasswordDto = this.formValues();
    console.log(userResetPasswordDto);
    const res: ResponseApiDto = await this.registerService.resetPassword(userResetPasswordDto).toPromise() as ResponseApiDto;
    if (!(res?.message == 'Error')) {
      await this.utilService.showToast({ message: 'Email Enviado', type: ErrorType.info });
      this.resetForm();
      this.router.navigateByUrl('/login', { replaceUrl: true });
    } else {
      await this.utilService.showToast({ message: 'Error', type: ErrorType.error });
    }



  }


}
