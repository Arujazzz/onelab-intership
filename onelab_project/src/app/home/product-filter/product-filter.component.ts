import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { products } from '../shared/models/products';
import { Category } from '../shared/models/categories';
import { CategoryService } from '../shared/services/category.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  products = products;

  @Input() category: Category | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {
    this.router.events.subscribe((value => {
      this.getProducts();
      this.getCategory();
    }))
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  getProducts(){
    const id = this.route.snapshot.paramMap.get('categoryId') || null;
    this.productService.getProductsByCategoryId(Number(id)).subscribe(products => this.products = products);
  }

  getCategory(){
    const id = this.route.snapshot.paramMap.get('categoryId') || null;
    this.categoryService.getCategory(Number(id)).subscribe(category => this.category = category);
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  share() {
    window.alert(`You will be redirected to Telegram`);
  }

  goBack() {
    this.location.back();
  }


  toDetails(id: number) {
    this.router.navigate(["home/products/"+id])
  }

}
