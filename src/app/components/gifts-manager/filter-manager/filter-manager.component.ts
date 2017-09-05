import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-manager',
  templateUrl: './filter-manager.component.html',
  styleUrls: ['./filter-manager.component.css']
})
export class FilterManagerComponent implements OnInit {
  @Input() genderFilter;
  @Input() priceFilter;


  @Output() filterGifts = new EventEmitter<any>();
  filtersValue = [];
  constructor() { }

  ngOnInit() {
    this.filterGifts.emit(this.filtersValue);
  }

  onSubmit(form){
    const filters = Object.values(form.form.controls);
    this.filtersValue = filters.map(filter => filter.value);
    this.filterGifts.emit(this.filtersValue);

  }

}
