import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { UtilService } from '../services/util.service';

export abstract class FormUtil {

  formData: FormGroup;
  formBuilder: FormBuilder;
  sessionService: SessionService;
  utilService: UtilService;

  formValue: { [key: string]: any } = {};

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.sessionService = injector.get(SessionService);
    this.utilService = injector.get(UtilService);
    this.formData = this.formValidators();
  }

  /**
   * Acción del formulario
   */
  async onSubmit(): Promise<void> {
    if (this.formData.valid) {
      await this.utilService.executeProcess(() => this.onSubmitAction());
    }
  }

  /**
   * Valores del formulario
   */
  formValues(): any {
    return Object.assign(this.formData.value, this.formValue);
  }

  /**
   *Reinicia el formulario
   */
  resetForm(): void {
    this.formData.reset();
  }


  private formValidators(): FormGroup {
    return this.formBuilder.group(this.formBuilderGroup());
  };

  protected abstract formBuilderGroup(): { [key: string]: any };
  protected abstract onSubmitAction(): Promise<void>;

}
