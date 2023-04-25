import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoService
{

  constructor(private http:HttpClient) { }

  getNgoList():Observable<any>
  {
    return this.http.get(`https://womenemp.azurewebsites.net/wep/api/findAllNgos`);
  }

  getNgo(id:string):Observable<any>
  {
    return this.http.get(`https://womenemp.azurewebsites.net/wep/api/ngo/${id}`);
  }

  getNgoBySector(id:string):Observable<any>
  {
    return this.http.get(`https://womenemp.azurewebsites.net/wep/api/getngosbysector/${id}`);
  }

  updateNgo(id:string,value:any):Observable<any>
  {
    return this.http.put(`https://womenemp.azurewebsites.net/wep/api/ngos/${id}`,value);
  }

  deleteNgo(id:string):Observable<any>
  {
    return this.http.delete(`https://womenemp.azurewebsites.net/wep/api/ngos/${id}`,{responseType:'text'});
  }

    

}
