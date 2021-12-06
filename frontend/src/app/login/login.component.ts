import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datosLogin = { usuario: "", pass: "" };
  errorMessage = "Este campo es requerido";


  //Función para campos requeridos
  getErrorMessage() {
    return this.errorMessage;
  }

  iniciar(form: NgForm) {
    if (form.invalid) {
      return;

    }
  }
}
