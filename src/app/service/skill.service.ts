import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL = 'https://porfolio-backend-hrp.herokuapp.com/Habilidad/'

  constructor (private http: HttpClient) { }

  public listSkill(): Observable<skill[]> {
    return this.http.get<skill[]>(this.apiURL+ 'list');
  }

  public detailSkill(id: number): Observable<skill> {
    return this.http.get<skill>(this.apiURL+ `detail/${id}`);
  }

  public saveSkill(ski: skill): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save/', ski);
  }

  public updateSkill(id: number, ski: skill): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, ski);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }
}
