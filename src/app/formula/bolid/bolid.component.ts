import {Component, Input, OnInit} from '@angular/core';
import {Bolid} from '../bolid';

@Component({
  selector: 'app-bolid',
  templateUrl: './bolid.component.html',
  styleUrls: ['./bolid.component.css']
})
export class BolidComponent implements OnInit {

  @Input() bolid: Bolid;

  constructor() { }

  ngOnInit() {
  }

}
