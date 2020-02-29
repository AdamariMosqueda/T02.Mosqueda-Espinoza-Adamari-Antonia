import { ConversorComponent } from './Conversor/conversor.component';
import { DivisaComponent } from './Divisa/divisa.component';
import { TemperaturaComponent } from './Temperatura/temperatura.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent, TemperaturaComponent, DivisaComponent, ConversorComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
