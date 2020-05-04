import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* We can interpolate or bind data to our template from our class properties of our app component
  */

  // PROPERTIES

  name = 'Angular';

  isTrue = false;
  multiply = 67 * 5
  timesSkydive = 3
  subtract = function () { 30 - 7 }
  favFruit = 'apple'
  jason = { firstName: 'Jason', lastName: 'Bourne', age: 22,favoriteTV: 'Simpsons', isWorking: false }
  family = ['mom', 'dad', 'sister', 'brother', 'dog']
  url = 'https://www.google.com'
  linkText = 'Click Me'
  // color = 'blue';

  // METHODS
  
  //!!!!need to have the button alert details about Jason as the alert message First Name: Jason etc.
  clickAlert() {
    console.log("This was clicked!");
    alert("This is Jason Bourne");
  }

  changeColor() {
    console.log("you just changed the text color! and the favFruit!")
    this.favFruit = "banana";
    this.name = "super Angular";
  }

//figure out how to better interpolate Arrays. 
  // clickAlert1() {
  // console.log(this.jason.firstName);
  // alert(this.jason.firstName);
  // }


}


// METHODS EXAMPLES

//   clickAlert() {
//     console.log("This was clicked!");
//     alert("Hello! You clicked a button. ")
//   }

//   changeColor() {
//     console.log("The color was changed!")
//     this.color = "red";
//     this.title = "New Title";
//   }

//   returnValue() {
//     let val = "Return Value";
//     return val;
//   }
