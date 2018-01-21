import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//para mapear los datos que provienen del servidor
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  public url = "http://localhost/symfony/2018/videoclub/web/app_dev.php";

  constructor (private _http:Http) {
  }

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

}
