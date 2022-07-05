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

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(transactions => {
      this.transactionService.setTransactions(transactions.data);
      this.transactions = transactions.data;
    })
  }

  showTransaction = (transactionId: string) => {
    this.router.navigate([`transaction-description/${transactionId}`])
  }

  deleteTransaction = (transactionId: string) => {
    const transaction = this.transactionService.getTransactions().filter(transaction => transaction.id === transactionId);
    const selectedTransaction = transaction[0];
    const transactionToDelete = selectedTransaction.id
    this.transactionService.deleteTransaction(transactionToDelete).subscribe(transactionid =>{},
      (err)=> console.error(err))
  }
}
