import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  pinFormatter(value: number) {
    document.documentElement.style.setProperty('--ion-font-size', value.toString()+'px');
    return `${value}px`;
  }

  changeText(event: any){
    document.documentElement.style.setProperty('--ion-font-family', event.target.value);
  }
}
