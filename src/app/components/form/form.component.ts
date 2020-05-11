import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ifContact : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.ifContact = this.fb.group({
      contactName : this.fb.control('',[Validators.required,Validators.minLength(3)]),
      email : this.fb.control('')
    });
  }

  onSubmit(){
    console.log(this.ifContact);
  }

}
