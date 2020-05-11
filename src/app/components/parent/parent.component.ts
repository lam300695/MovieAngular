import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  increment(isAdd: boolean) {
    if (isAdd) {
      this.value++;
    } else {
      this.value = this.value - 1;
    }
  }

}
