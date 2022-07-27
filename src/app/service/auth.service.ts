import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto.model';
import { LoginUser } from '../model/login-user.model';
import { NewUser } from '../model/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL= "http://localhost:8080/auth";
  
  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post(this.authURL + '/newUser', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
  return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUser);
  }
  
}