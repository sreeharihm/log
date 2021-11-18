import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IotservicesService {

  url: string='https://iotlog.azurewebsites.net/api/';
  constructor(private http: HttpClient) { }
  
  public get(){
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.get( this.url+'log',{ headers: headers });
  }
  public post(data:any){
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.post(this.url+'log',data, { headers: headers });
  }

  public vaidate(username: string,password: string){
    return this.http.post( this.url+'log/authenticate',{"username": username,"password": password});
  }
  
}
