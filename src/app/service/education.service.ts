import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  apiURL = 'http://localhost:8080/Educacion/'

  constructor (private http: HttpClient) { }

  public listEducation(): Observable<education[]> {
    return this.http.get<education[]>(this.apiURL+ 'list');
  }

  public detailEducation(id: number): Observable<education> {
    return this.http.get<education>(this.apiURL+ `detail/${id}`);
  }

  public saveEducation(edu: education): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save/', edu);
  }

  public updateEducation(id: number, edu: education): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, edu);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }
}
