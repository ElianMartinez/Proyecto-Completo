import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../login/login';


 
@Injectable()
export class LoginService{
    public url: string = 'http://192.168.43.25:3000/api/login' ;
 
    constructor(
        public http: HttpClient
    ){
    }
 
    obtenerData(): Observable<any>{
        var t=``;

        var headers_object = new HttpHeaders();
            headers_object.append('Content-Type', 'application/json');
            headers_object.append("Authorization", "Bearer " + t);
    
            const httpOptions = {
              headers: headers_object
            };
            
            return this.http.get(this.url, httpOptions);
    }
 
    Loguearse(login: Login): Observable<any>{
        let json = JSON.stringify(login);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this.http.post(this.url, params , {headers: headers});
    }
 
 
}
















