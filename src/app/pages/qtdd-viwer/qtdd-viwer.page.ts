import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pampe } from '../../../interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-qtdd-viwer',
  templateUrl: './qtdd-viwer.page.html',
  styleUrls: ['./qtdd-viwer.page.scss'],
})
export class QtddViwerPage implements OnInit {

  public pampe: Pampe;

  constructor(private storage: Storage) {
   
    
   }

  async ngOnInit() {
    await this.storage.get('pampe').then((parameter: Pampe) => {
      console.log(parameter);
      this.pampe = parameter;
    });
    
  }

}
