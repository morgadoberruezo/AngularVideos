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
  public errorMesage;
  public token;
  public identidad;
  //seteamos por defecto este objeto en el formulario
  //[ngModel]="user.email"
  public user = {
        "email" : "m@gmail.com",
        "pass" : "1234",
        "getHash": "false"
        //si es false ---> se obtiene la identidad del usuario
        //si es true ---> se obtiene el token
  };

  constructor(private _loginService: LoginService) {
<<<<<<< HEAD
    console.log(localStorage.getItem('identidad'));
    console.log(localStorage.getItem('token'));
   }
=======
    console.log (_loginService.signup());

  }
>>>>>>> 1de4019700adb719479662573fc6e2453f986247

  guardar( forma:NgForm ) {
    this._loginService.signup(this.user)
          .subscribe(
            response => {
              //gethash == false
              this.identidad = response;
              if (this.identidad.length <= 1){
                console.log('error en token');
              }else {
                localStorage.setItem('identidad',JSON.stringify(this.identidad));
                //console.log(localStorage.getItem('identidad'));
                this.user.getHash = "true";
                //lanzamos otra Http
                this._loginService.signup(this.user)
                      .subscribe(
                        response => {
                          this.token = response;
                          if (this.token.length <= 0)
                            console.log('error en token servidor')
                          else {
                            localStorage.setItem('token',JSON.stringify(this.token));

                            //redirección
                          }
                        },
                        error => {
                          this.errorMesage = <any>error;
                          if (this.errorMesage != null){
                            console.log('Error en la petición');
                            console.log(this.errorMesage);
                          }
                        }
                      );
              };

            },
            error    => {
              this.errorMesage = <any>error;
              if (this.errorMesage != null){
                console.log('Error en la petición');
                console.log(this.errorMesage);
              }
            }
          )

  }

}
