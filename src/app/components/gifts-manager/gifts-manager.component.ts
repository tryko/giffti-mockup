import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { GiftsService } from "./../../services/gifts.service";

import { ProductModel } from "./../../models/product.model";

@Component({
  selector: "gifts-manager",
  template: `
    <div class="manger-container">
      <filter-manager [genderFilter]="genderFilter" [priceFilter]="priceFilter" (filterGifts)="filterGifts($event)"></filter-manager>
      <div *ngIf="gifts ; let giftsList; else loading">
        <gift-list [giftList]="giftsList"></gift-list>
      </div>
      <ng-template #loading>Loading</ng-template>
      <div class="footer"></div>
    </div>
  `,
  styleUrls: ["./gifts-manager.component.css"]
})
export class GiftsManagerComponent implements OnInit {
  gifts: ProductModel[];
  priceFilter: object[];
  genderFilter: object[];

  constructor(private giftsService: GiftsService) {
    this.gifts = giftsService.getStoreList();
    this.priceFilter = giftsService.getPriceFilter();
    this.genderFilter = giftsService.getGenderFilter();
  }

  ngOnInit() {}

  filterGifts(filtersValue) {
    let tempGifts = this.giftsService.getStoreList();
    if (filtersValue.length === 0) {
      this.gifts = tempGifts;
    } else {
      const filteredGifts = [];
      for (var c = 0; c < filtersValue.length; c++) {
        // debugger
        if (filtersValue[c] !== "") {
          for (var i = 0; i < tempGifts.length; i++) {
            // let giff = tempGifts[i].ProductTags.filter(tag => {
            //   return tag === filtersValue[c];
            // }).length;
            if (
              tempGifts[i].ProductTags.filter(tag => tag === filtersValue[c])
                .length
            )
              filteredGifts.push(tempGifts[i]);
          }
      }
      console.log(filteredGifts);
      this.gifts = filteredGifts;
    }
  }
}}
