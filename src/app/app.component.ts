import { Component } from '@angular/core';
import { ListaResultados } from './shared/models/listaResultados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listaResultado: ListaResultados[] = new Array<ListaResultados>();
  total = '0';

  addItem(newItem: ListaResultados) {
    this.total = 'oi';
    this.listaResultado.push(newItem);
  }
}
