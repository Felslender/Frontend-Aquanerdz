import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadSystem, CadUser, LogUser, Systems } from 'src/app/models/aqua';
import { environment } from 'src/environments/environment';
import { GetTokenService } from './getToken.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AquaService {

  constructor(private http: HttpClient, private token: GetTokenService) { }

  registerUser(body: CadUser): Observable<CadUser> {
       console.log(body);
      return this.http.post<CadUser>(environment.API_URL + "/user", body);
  }

  loginUser(body: LogUser): Observable<LogUser> {

    // return console.log(body); }
    // console.log(body)
    // o subscribe é o corpo do meu retorno, sempre que a api retornar algo
    return this.http.post<LogUser>(environment.API_URL + "/login", body);
  }

  registerSystem(body: CadSystem): Observable<CadSystem>{
    const headerrs = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`
    })
    // console.log(body);
    return this.http.post<CadSystem>(environment.API_URL + "/sistema", body, {headers: headerrs});
  }

  listSystem(): Observable<{ sistemas: Systems[] }>{
    const headerrs = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`
    })
    // console.log(body);
    return this.http.get<{ sistemas: Systems[] }>(environment.API_URL + "/sistemas", {headers: headerrs});
  }

  systemId(id: number): Observable<{ sistema: Systems }>{
    const headerrs = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`
    })
    // console.log(body);
    return this.http.get<{ sistema: Systems }>(environment.API_URL + "/sistema" + `/${id}`, {headers: headerrs});
  }
}
