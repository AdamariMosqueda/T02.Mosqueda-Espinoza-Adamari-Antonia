import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  title = 'Medidas';
  UNOInput = 0;
  DOSInput = 0;
  result = 0;

 
  Medidas(){
    this.result = this.UNOInput *  0.62137;
    this.DOSInput = this.result;
     console.log(this.UNOInput + " kilometros son " + this.DOSInput + " millas");
     
}
}
