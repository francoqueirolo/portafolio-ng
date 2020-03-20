import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/product.interface";
import { resolve } from "../../../node_modules/@types/q";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: Product[];
  productosFiltrado: Product[] = [];
  loading = true;

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://ng-portafolio-43934.firebaseio.com/productos_idx.json")
        .subscribe((resp: Product[]) => {
          this.products = resp;
          this.loading = false;
          console.log(resp);
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://ng-portafolio-43934.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.products.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
