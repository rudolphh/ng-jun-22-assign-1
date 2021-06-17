import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('appItems') items !: string [];
  @Output() removeItemIndexEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  removeItem(index: number){
    this.removeItemIndexEvent.emit(index);
  }

}
