import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { CalculosComponent } from './componentes/calculos/calculos.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';

@NgModule({
  declarations: [AppComponent, CalculosComponent, TituloComponent, ResultadoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
