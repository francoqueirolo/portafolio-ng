import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductoDescripcion } from "../../interfaces/producto-descripcion.interface";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      // console.log(parametros['id']);
      this.productService
        .getProducto(parametros["id"])
        .subscribe((producto: ProductoDescripcion) => {
          this.id = parametros["id"];
          this.producto = producto;
        });
    });
  }
}
