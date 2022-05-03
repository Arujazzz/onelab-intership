import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CartComponent,
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    FooterComponent,
    SearchFilterPipe,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'about',
            component: AboutComponent,
          },
          {
            path: 'categories',
            component: CategoryComponent,
          },
          {
            path: 'categories/:categoryId',
            component: ProductFilterComponent
          },
          {
            path: 'products',
            component: ProductListComponent,
          },
          {
            path: 'products/:productId',
            component: ProductDetailsComponent
          },
          {
            path: 'cart',
            component: CartComponent,
          },
        ]
      },
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
