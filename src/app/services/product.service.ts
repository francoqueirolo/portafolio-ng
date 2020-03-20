import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  loading = true;

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('https://ng-portafolio-43934.firebaseio.com/productos_idx.json')
      .subscribe((resp: Product[]) => {
        this.products = resp;
        this.loading = false;
        console.log(resp);
      });
  }
}
