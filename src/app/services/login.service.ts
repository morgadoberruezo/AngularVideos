import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//para mapear los datos que provienen del servidor
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
<<<<<<< HEAD
  public url = "http://localhost/symfony/2018/videoclub/web/app_dev.php";
  constructor(private _http:Http) { }

  signup(user_login) {
    //la idea es hacer una petición Ajax (http) que nos deuvuelva
    //el hash correspondiente al usuario que intenta logearse
    let user_json:any = JSON.stringify(user_login);
    let   params = "data=" + user_json;
    console.log(user_json);
    console.log(params);
    //enviamos la cabecera
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return (this._http.post(this.url+"/admin/login", params, {headers:headers})
                        .map(res => res.json()));
  }
=======

  constructor() { }

  signup() {
    return "Hola desde el servicio ...";
  }

>>>>>>> 1de4019700adb719479662573fc6e2453f986247
}
