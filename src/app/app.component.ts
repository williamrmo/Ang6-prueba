import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // users = ['Ryan', 'Cameron', 'Mario', 'Jon Snow', 'Arya Stark'];
  // activated: boolean = false;
  name: string = 'Fabian';
  age: number;
  adress: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 21;
    this.adress = {
      street: '221B Baker Street',
      city: 'London'
    };
    this.hobbies = ['Swimming', 'Read', 'Write'];
  }

}
