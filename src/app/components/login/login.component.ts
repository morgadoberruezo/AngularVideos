import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  titulo:string = "Identifícate";
  //seteamos por defecto este objeto en el formulario
  //[ngModel]="user.email"
  user:Object = {
        "email" : "m@gmail.com",
        "password" : "1234",
        "getHash": "false"
  };

  constructor(private _loginService: LoginService) {
    console.log (_loginService.signup());

  }

  guardar( forma:NgForm ) {
  //  this.user.email = this.email;
    console.log("objeto ngForm:",forma);
    console.log("Valor:", forma.value);
    console.log("usuario:", this.user);

  }

}
