import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.precio?.invalid &&
           this.miFormulario?.controls.precio?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched
           && this.miFormulario?.controls.precio?.value < 0 
  }

  // guardar( miFormulario: NgForm ) {
  guardar() {
    console.log('Posteo Correcto');

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }

}
