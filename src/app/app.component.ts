import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hello World';
  counter = 10;
  increaseBy(value: number) {
    this.counter = this.counter + value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
