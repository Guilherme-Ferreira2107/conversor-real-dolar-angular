import { Component, Input, OnInit } from '@angular/core';
import { ListaResultados } from 'src/app/shared/models/listaResultados';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  @Input('listaItems') listaItems: ListaResultados[];
  @Input('total') total: number;

  constructor() {}

  ngOnInit(): void {}
}
