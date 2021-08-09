import { Component } from '@angular/core';
import { MathCalculator } from '@ionic-native/math-calculator/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: any;
  error: any;
  num1: number;
  num2: number;

  constructor(
    private mathCalculator: MathCalculator
  ) {}

  add(num1, num2){
    let data = {
      param1: num1,
      param2: num2
    };
    this.mathCalculator.add(data).then(result=>{
      this.result = result;
    }).catch(err=>{
      this.error = err;
    });
  }

  substract(num1, num2){
    let data = {
      param1: num1,
      param2: num2
    };
    this.mathCalculator.substract(data).then(result=>{
      this.result = result;
    }).catch(err=>{
      this.error = err;
    });
  }
}
