import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  isTrue = false;
  multiply = 67 * 5
  timesSkydive = 3
  subtract = function () { 30 - 7 }
  favFruit = 'apple'
  jason = { firstName: 'Jason', lastName: 'Bourne', age: 22, favoriteTV: 'Simpsons', isWorking: false }
  family = ['mom', 'dad', 'sister', 'brother', 'dog']
  url = 'https://www.google.com'
  linkText = 'Click Me'
  color = 'blue';


}
