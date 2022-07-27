import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiURL = 'http://localhost:8080/Experiencia/'

  constructor (private http: HttpClient) { }

  public listExperience(): Observable<experience[]> {
    return this.http.get<experience[]>(this.apiURL+ 'list');
  }

  public detailExperience(id: number): Observable<experience> {
    return this.http.get<experience>(this.apiURL+ `detail/${id}`);
  }

  public saveExperience(exp: experience): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save/', exp);
  }

  public updateExperience(id: number, exp: experience): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, exp);
  }

  public deleteExperience(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }
}
