import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]// esto es para validar un booleano
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({ 
      ...this.persona,
      condiciones: false });//se establecen los datos de persona desde el inicio


      // this.miFormulario.valueChanges.subscribe( form => {
      //   delete form.condiciones;
      //   this.persona = form;

      //   // console.log(form);
      // })


      //LO MISMO DE ARRIBA PERO OPTIMIZADO
      this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
        
        this.persona = rest;

        // console.log(form);
      })

  }


  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;

    console.log(formValue);
  }

}
