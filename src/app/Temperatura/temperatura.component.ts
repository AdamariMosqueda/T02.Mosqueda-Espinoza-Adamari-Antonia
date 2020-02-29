import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  title = 'Temperatura';
  FInput = 0;
  CInput = 0;
  result = 0;

  Grados(){
    this.result = (this.FInput - 32) *(5/9);
    this.CInput = this.result;
    console.log(this.FInput + " grados Fahrenheit son " + this.CInput + " grados Celsius");
}
}
