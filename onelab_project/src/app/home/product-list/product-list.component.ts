import { Component, OnInit } from '@angular/core';
import { products } from '../shared/models/products';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products;
  searchText: string;


  constructor(
    private router: Router,
    ) {
  }

  ngOnInit(): void {}

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  toDetails(id: number) {
    this.router.navigate(["home/products/"+id])
  }

  asc(){
    products.sort((a, b) => (a.rating < b.rating ? -1 : 1))
  }

  des(){
    products.sort((a, b) => (a.rating > b.rating ? -1 : 1))
  }

  share() {
    window.alert(`You will be redirected to Telegram`);
  }


}
