import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<any>{
    return this.httpClient.get(`${environment.api_url}/transactions`)
  }

  getTransactionsById(): Observable<any>{
    return this.httpClient.get(`${environment.api_url}/transactions/id`)
  }
}
