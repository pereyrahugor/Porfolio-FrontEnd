import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { social } from '../model/social.model';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  apiURL = 'http://localhost:8080/Social/'

  constructor (private http: HttpClient) { }

  public listSocial(): Observable<social[]> {
    return this.http.get<social[]>(this.apiURL+ 'list');
  }

  public detailSocial(id: number): Observable<social> {
    return this.http.get<social>(this.apiURL+ `detail/${id}`);
  }

  public saveSocial(soc: social): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save/', soc);
  }

  public updateSocial(id: number, soc: social): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, soc);
  }

  public deleteSocial(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }
}
