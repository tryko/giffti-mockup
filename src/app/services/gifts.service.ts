import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import * as data from "./products.json";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { ProductModel } from "../models/product.model";

@Injectable()
export class GiftsService {
  constructor(private http: Http) {}

  getStoreList(): ProductModel[] {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.addStoreNameToProducts();
    // return this.http.get("http://localhost:3000/devices")
    //         .map(res => this.extractData(res))
    //         .catch(err => this.handleError(err));
  }

  getGenderFilter() {
    return (<any>data).GenderFilter;
  }

  getPriceFilter() {
    return (<any>data).PriceFilter;
  }

  addStoreNameToProducts() {
    const giftsWithStoreName = (<any>data).Stores.map(store => {
      return store.Products.map(product => {
        product.ProductStore = store.StoreName;
        return product;
      });
    });
    return giftsWithStoreName.reduce((a, b) => {
      return a.concat(b);
    }, []);;
  }


  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error("Bad response status: " + res.status);
    }
    let body = res.json();
    console.log("body", body);
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || "Server error";
    console.error("error in service.handelError", errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
