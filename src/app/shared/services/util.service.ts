import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ErrorType } from '../enum/error-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController) {
  }

  async showLoading(param?: { duration?: number }): Promise<HTMLIonLoadingElement> {
    const loading: HTMLIonLoadingElement = await this.loadingController
      .create(
        {
          duration: param?.duration,
          spinner: null,
          mode: 'ios',
          message: `<div class="spinner">
                      <div class="rect1"></div>
                      <div class="rect2"></div>
                      <div class="rect3"></div>
                      <div class="rect4"></div>
                      <div class="rect5"></div>
                    </div>`,
          cssClass: 'loading-spinkit'
        });

    await loading.present();
    return loading;
  }

  async showLoading2(param?: { duration?: number; message?: string }): Promise<HTMLIonLoadingElement> {
    const loading: HTMLIonLoadingElement = await this.loadingController
      .create(
        {
          duration: param?.duration,
          message: param?.message,
          spinner: 'bubbles',
          mode: 'ios',
          cssClass: 'loading-custom'
        });

    await loading.present();
    return loading;
  }

  async showToast(
    param: {
      duration?: number; header?: string;
      message: string; position?: 'top' | 'bottom' | 'middle';
      type?: ErrorType;
    }): Promise<HTMLIonToastElement> {
    const toast: HTMLIonToastElement = await this.toastController
      .create(
        {
          duration: param?.duration || 5000,
          header: param?.header,
          message: param.message,
          mode: 'ios',
          position: param?.position || 'bottom',
          color: param?.type || ErrorType.error,
          cssClass: 'custom-toast'
        });

    toast.present();
    return toast;
  }

  async showAlert(param: { header?: string; message: string; action?: () => void }): Promise<HTMLIonAlertElement> {
    const alert: HTMLIonAlertElement = await this.alertController
      .create(
        {
          header: param.header,
          message: param.message,
          buttons: [
            {
              text: 'Aceptar',
              handler: param?.action
            }],
          mode: 'ios',
          backdropDismiss: false
        });

    await alert.present();
    return alert;
  }

  async executeProcess(action: () => Promise<void>): Promise<void> {
    const loading = await this.showLoading();
    try {
      await action();
    } catch (error:any) {
      this.showToast({ message: error.message, type: error.type });
    } finally {
      await loading.dismiss();
    }
  }

}


