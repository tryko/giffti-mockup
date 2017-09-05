import { ProductModel } from './../../../models/product.model';
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: 'gift-list',
  template: `
  <div class="list-container">
     <div  class="grid-container">
      <gift-item *ngFor="let gift of giftList" [giftItem]="gift"></gift-item>
    </div>
  </div>
  `,
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  @Input() giftList:ProductModel[];
  constructor() { }

  ngOnInit() {
  }

  // getGiftsFromStoreList():ProductModel[]{
  //   this.storeList.map()
  //   return
  // }

}
