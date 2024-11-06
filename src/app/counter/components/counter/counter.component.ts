import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <p>
  Counter: {{counter}}
  </p>
  <button (click)="increaseBy(+1)">Sumar 1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">Restar 1</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  public increaseBy(value: number) {
    this.counter = this.counter + value;
  };

  public resetCounter() {
    this.counter = 10;
  };

}
