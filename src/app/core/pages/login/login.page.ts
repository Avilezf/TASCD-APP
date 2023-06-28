import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseApiDto } from 'src/app/shared/dto/response-api.dto';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { FormUtil } from 'src/app/shared/util/form.util';
import { LoginService } from '../../services/login.service';
import { ResponseLoginDto } from './dto/response-login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends FormUtil implements OnInit {

  constructor(
    private router: Router,
    protected injector: Injector,
    private loginService: LoginService) {
    super(injector);
  }

  ngOnInit() {
  }


  protected formBuilderGroup(): { [key: string]: any } {
    return {
      email: ['', Validators.required],
      password: ['', Validators.required]
    };
  }

  protected async onSubmitAction(): Promise<void> {
    return this.login();
  }

  private async login(): Promise<void> {
    try {

      const res: ResponseApiDto = await this.loginService.login(this.formValues()).toPromise() as ResponseApiDto;

      if (!res.success) {
        await this.utilService.showToast({ message: res.data, type: ErrorType.error });
      } else {
        await this.sessionService.saveDataSession(res.data);
        await this.utilService.showToast({ message: 'Login Successfully', type: ErrorType.info });

        this.resetForm();
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }

    } catch (error) {
      await this.utilService.showToast({ message: 'Contactar al Administrador', type: ErrorType.error });
    }

  }

}
