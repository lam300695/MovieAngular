import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrPerson = [
    {name: 'LAm', age : 25},
    {name: 'HIeu', age : 24},
    {name: 'HUng', age : 14}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
