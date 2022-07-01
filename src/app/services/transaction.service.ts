import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../transactions/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[] = [];

  setTransactions(transactions:Transaction[]){
    this.transactions = transactions;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  constructor(private httpClient: HttpClient) { }

  getAllTransactions(): Observable<any>{
    return this.httpClient.get(`${environment.api_url}/transactions`)
  }

  updateTransaction(transaction: Transaction): Observable<any>{
    return this.httpClient.put(`${environment.api_url}/transactions`, transaction)
  }

}
