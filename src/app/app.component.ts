import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public input1 : string = '';
  public input2 : string = '';
  public input3 : string = '';
  public items : string[] = [];

  constructor() {}

  onSubmit() {
    this.items.push(this.input1, this.input2, this.input3);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
