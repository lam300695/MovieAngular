import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.myClick.emit();
  }

}
