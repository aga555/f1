import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bolid',
  templateUrl: './bolid.component.html',
  styleUrls: ['./bolid.component.css']
})
export class BolidComponent implements OnInit {

 bolid = {
   modelName: 'Redbull',
   imageUrl: '/assets/redBull.png',
   range: 80,
 };

  constructor() { }

  ngOnInit() {
  }

}
