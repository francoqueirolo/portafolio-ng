import { Component } from "@angular/core";
import { InfoPaginaService } from "./services/info-pagina.service";
import { ProductService } from "./services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public infoPaginaService: InfoPaginaService,
    public productService: ProductService
  ) {}
}
