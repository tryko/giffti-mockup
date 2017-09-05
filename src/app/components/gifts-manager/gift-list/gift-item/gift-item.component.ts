import { ProductModel } from "./../../../../models/product.model";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "gift-item",
  template: `
  <md-card class="card-container" color="primary">
    <img md-card-image [src]="giftItem.ProductImage">
    <md-card-footer class="card-footer">
      <div class="product-store">{{giftItem.ProductStore}}</div>
      <div class="product-store">{{giftItem.PriceLabel}}</div>

      <p class="product-title">{{giftItem.ProductTitle}}</p>

    </md-card-footer>
  </md-card>
  `,
  styleUrls: ["./gift-item.component.css"]
})
export class GiftItemComponent implements OnInit {
  @Input() giftItem: ProductModel;

  constructor() {}

  ngOnInit() {}
}
