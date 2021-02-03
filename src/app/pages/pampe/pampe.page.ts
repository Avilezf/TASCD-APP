import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pampe',
  templateUrl: './pampe.page.html',
  styleUrls: ['./pampe.page.scss'],
})
export class PAMPEPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  qtdd(){
    this.router.navigate(['/qtdd']);
  }

}
