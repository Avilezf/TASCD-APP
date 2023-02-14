import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { FormUtil } from '../../../shared/util/form.util';
import { RegisterService } from '../../services/register.service';
import { ResponseLoginDto } from '../login/dto/response-login.dto';
import { UserRegisterDto } from '../register/dto/user-register.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends FormUtil implements OnInit {

  constructor(private router: Router, protected injector: Injector, private registerService: RegisterService) {
    super(injector);
  }

  ngOnInit() {
  }

  protected formBuilderGroup(): { [key: string]: any } {
    return {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    };
  }

  protected async onSubmitAction(): Promise<void> {
    return this.register();
  }

  private async register(): Promise<void> {
    const registerDto: UserRegisterDto = this.formValues();
    if (!(registerDto.password == registerDto.password2)) {
      await this.utilService.showToast({ message: 'Las contraseñas no coinciden', type: ErrorType.error });
    } else {
      const res: ResponseLoginDto = await this.registerService.register(this.formValues()).toPromise() as ResponseLoginDto;
      if (!res.message == null) {
        await this.utilService.showToast({ message: 'Registro Exitoso', type: ErrorType.info });
        this.resetForm();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      } else {
        await this.utilService.showToast({ message: 'Ya existe el usuario', type: ErrorType.error });
      }
    }


  }

}
