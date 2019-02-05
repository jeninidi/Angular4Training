import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public number1: number;
  public number2: number;
  public result:  number;

  calculator_add(){
    this.result = this.number1 + this.number2;
  }

  calculator_substract(){
    this.result = this.number1 - this.number2;
  }

  calculator_multiply(){
    this.result = this.number1 * this.number2;
  }

  calculator_divide(){
    this.result = this.number1 / this.number2;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
