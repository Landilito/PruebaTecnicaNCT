import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private transactionRouter: Router) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions.data;
      console.log(transactions);
    })
  }

  ShowTransaction = (transactionId: string) => {
    this.transactionRouter.navigate([`transaction-description/${transactionId}`])
  }
}
