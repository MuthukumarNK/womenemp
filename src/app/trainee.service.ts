import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http:HttpClient) { }

  getTraineeList():Observable<any>
  {
    return this.http.get(`https://womenemp.azurewebsites.net/wep/api/findAllTrainees`);
  }

  getTrainee(id:string):Observable<any>
  {
    return this.http.get(`https://womenemp.azurewebsites.net/wep/api/trainee/${id}`);
  }

  updateTrainee(id:string,value:any):Observable<any>
  {
    return this.http.put(`https://womenemp.azurewebsites.net/wep/api/trainees/${id}`,value);
  }

  deleteTrainee(id:string):Observable<any>
  {
    return this.http.delete(`https://womenemp.azurewebsites.net/wep/api/trainees/${id}`,{responseType:'text'});
  }
}
