import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params["term"]);
      this.productService.buscarProducto(params["term"]);
    });
  }
}
