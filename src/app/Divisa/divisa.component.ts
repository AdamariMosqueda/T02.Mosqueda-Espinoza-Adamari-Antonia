import { Component } from '@angular/core';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent {
  title = 'Divisa';

  DolaresInput=0;
  PesosInput = 0;
  TCInput = 0;
  result = 0;

  Money(){
    this.result = this.DolaresInput*this.TCInput;
    this.PesosInput = this.result;
    console.log(this.DolaresInput + " dólares son " + this.PesosInput + " pesos");
   
}
}
