import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from "rxjs";
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './store/product.model'
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import { tap } from 'rxjs/operators';
import { P } from '@angular/cdk/keycodes';
import { selectAllProducts } from '../store/app.reducer';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit, OnInit {
  products$!: Observable<{ products: Product[]; }>;
  // products!: Product[];

  constructor(breakpointObserver: BreakpointObserver, private store: Store<fromApp.AppState>) {
    breakpointObserver.observe(['(max-width: 600px)'])
}

displayedColumns = ['position', 'name', 'weight', 'symbol'];

dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  ngOnInit(): void {
    console.log(this.store.select('products'))
  }

  ngAfterViewInit() {
    // this.store.select("products").subscribe(res => {
    //   console.log(res.products)
    //   this.products = res.products
    // })
    // console.log(this.store.select(selectAllProducts))
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
];