import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Su comentario se ha enviado. Muchas gracias!',
      duration: 1500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }

}
