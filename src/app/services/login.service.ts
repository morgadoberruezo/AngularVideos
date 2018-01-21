import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//para mapear los datos que provienen del servidor
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor() { }

  signup() {
    return "Hola desde el servicio ...";
  }

}
