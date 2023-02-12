import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-pampe',
  templateUrl: './pampe.page.html',
  styleUrls: ['./pampe.page.scss'],
})
export class PampePage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;
  public pampe:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  qtdd(){
    this.router.navigate(['/qtdd']);
  }

  scrollTo(){
    this.pampe = false;
    console.log('Hola')
  }

  scrollDown(){
    this.pampe = true;
    console.log('Adios')
  }


}
