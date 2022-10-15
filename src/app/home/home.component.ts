import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from "../store/app.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$!: Observable<any>;

  options!: FormGroup;

  color$!: Observable<any>;
  color = new FormControl('primary');
  font = new FormControl(16, Validators.min(10));
  

  constructor(fb: FormBuilder, private store: Store<fromApp.AppState>,) {
    this.options = fb.group({
      color: this.color,
      fontSize: this.color,
    });
   }
  
   onSubmit(){
    console.log(this.color.value);
    this.color$ = this.color.value;
    this.color = new FormControl(this.color.value);
   }

  ngOnInit(): void {
    
  }

}
