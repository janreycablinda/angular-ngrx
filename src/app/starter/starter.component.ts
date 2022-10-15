import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from "rxjs";
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './store/product.model'
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {
  // products$!: Observable<>;
  products$!: Observable<any>;
  myForm!: FormGroup;
  
  // products!: Product[];

  constructor(private store: Store<fromApp.AppState>, private fb: FormBuilder) {}

// displayedColumns = ['name', 'price', 'image_link', 'is_published'];

// dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  ngOnInit(): void {
    this.products$ = this.store.select('products')
    // this.store.select('products').subscribe(res => {
    //   console.log(res.products)
    // })

    this.myForm  = this.fb.group({
      name: 'test'
    })
    
  }

  onSubmit(form: FormGroup){
    console.log(form.value);
  }
}

export interface Element {
  id: number;
  name: string;
  price: number;
  image_link: string;
  is_published: boolean;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, name: 'Hydrogen', price: 1, image_link: 'http://', is_published: false },
  { id: 2, name: 'Hydrogen', price: 2, image_link:'http://', is_published: false },
  { id: 3, name: 'Hydrogen', price: 3, image_link:'http://', is_published: false },
  { id: 4, name: 'Hydrogen', price: 4, image_link: 'http://', is_published: false },
  { id: 5, name: 'Hydrogen', price: 5, image_link: 'http://', is_published: false }
];