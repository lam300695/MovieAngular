import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  isShow = true;
  arrName = ['Lam','Hieu','Hung'];

  constructor() {
  }

  ngOnInit(): void {
  }
  Show(){
  this.isShow = !this.isShow;
  }
}
