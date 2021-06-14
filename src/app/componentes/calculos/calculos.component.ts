import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListaResultados } from 'src/app/shared/models/listaResultados';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css'],
})
export class CalculosComponent implements OnInit {
  @Input() item: ListaResultados = new ListaResultados(null, null);
  @Output()
  formSubmit: EventEmitter<ListaResultados> = new EventEmitter<ListaResultados>();

  resultado: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    this.resultado = (form.value.real * 5.58).toFixed(2);
  }
}
