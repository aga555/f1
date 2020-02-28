import {Component, OnInit} from '@angular/core';
import {Bolid} from '../bolid';
import {RedBull} from '../red-bull';
import {MercedesBenz} from '../mercedes-benz';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  bolids: Bolid[] = [];
  constructor() { }

  ngOnInit() {
    this.bolids.push(new RedBull());
    this.bolids.push(new MercedesBenz());
  }

}
