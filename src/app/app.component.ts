import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  input1 : string = '';
  input2 : string = '';
  input3 : string = '';

  items : string[] = [];


  @ViewChild('div') div !: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {

  }

  addElement() {
    const ul: HTMLUListElement = this.renderer.createElement('ul');
    ul.innerHTML = `<li>${this.input1}</li>`;
    ul.innerHTML += `<li>${this.input2}</li>`;
    ul.innerHTML += `<li>${this.input3}</li>`;
    this.renderer.appendChild(this.div.nativeElement, ul)
  }

  onSubmit() {
    this.items.push(this.input1);
    this.items.push(this.input2);
    this.items.push(this.input3);
  }

  remove(index: number) {
    this.items.splice(index, 1);
    console.log(this.items);
  }


}
