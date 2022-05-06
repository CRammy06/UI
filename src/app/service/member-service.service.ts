import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from '../model/member-model';
import { environment } from '../../environments/environment';

const baseUrl=environment.baseUrl;
const headers = { 'content-type': 'application/json'} ;
@Injectable({
  providedIn: 'root'
})

export class MemberServiceService {
  constructor(private http: HttpClient) { }
   
  getAll(): Observable<MemberModel[]> {
    return this.http.get<MemberModel[]>(baseUrl+'Member/GetMembers');
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'Member/CreateMember', data,{'headers':headers});
  }
  update(data: any): Observable<any> {
    return this.http.post(baseUrl+'Member/UpdateMember', data,{'headers':headers});
  }
  delete(data: any): Observable<any> {
    return this.http.post(baseUrl+'Member/DeleteMember', data,{'headers':headers});
  }
  
}
