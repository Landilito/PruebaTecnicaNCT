import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../transactions/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<any>{
    return this.httpClient.get(`${environment.api_url}/transactions`,{headers:{'Authorization':'efbd4282-cdee-462f-be42-1ab3f9d2e28a'}} )
  }
}
