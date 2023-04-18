import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtil } from 'src/app/shared/util/form.util';
import { RegisterService } from '../../services/register.service';
import { Validators } from '@angular/forms';
import { UserPasswordDto } from './dto/user-password.dto';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';
import { UserLoginDto } from '../login/dto/user-login.dto';
import { UserLoginResponseDto } from './dto/user-login.dto';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage extends FormUtil implements OnInit  {

  public email!: string | null;

  constructor(private router: Router, protected injector: Injector, private registerService: RegisterService, private route: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  protected formBuilderGroup(): { [key: string]: any } {
    return {
      password: ['', Validators.required],
      password2: ['', Validators.required],
    };
  }

  protected async onSubmitAction(): Promise<void> {
    return this.change();
  }

  private async change(): Promise<void> {
    const userPasswordDto: UserPasswordDto = this.formValues();
    if (!(userPasswordDto.password == userPasswordDto.password2)) {
      await this.utilService.showToast({ message: 'Las contraseñas no coinciden', type: ErrorType.error });
    } else {

      const userLoginDto: UserLoginResponseDto = {
        email: this.email,
        password: userPasswordDto.password
      }
      const res: ResponseApiDto = await this.registerService.changePassword(userLoginDto).toPromise() as ResponseApiDto;
      if (!(res?.message === 'Error')) {
        await this.utilService.showToast({ message: 'Cambio Exitoso', type: ErrorType.info });
        this.resetForm();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      }
    }


  }

}
