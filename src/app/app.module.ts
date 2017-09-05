import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { GiftsService } from "./services/gifts.service";


import { AppComponent } from './app.component';
import { GiftsManagerComponent } from './components/gifts-manager/gifts-manager.component';
import { GiftListComponent } from './components/gifts-manager/gift-list/gift-list.component';
import { GiftItemComponent } from './components/gifts-manager/gift-list/gift-item/gift-item.component';
import { FilterManagerComponent } from './components/gifts-manager/filter-manager/filter-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftsManagerComponent,
    GiftListComponent,
    GiftItemComponent,
    FilterManagerComponent
  ],
  imports: [
    BrowserModule,HttpModule,BrowserAnimationsModule,MaterialModule,FormsModule
  ],
  providers: [GiftsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
