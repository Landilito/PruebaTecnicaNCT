import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Transaction } from '../transaction';
import { TransactionRoutingModule } from '../transaction-routing.module';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private accountService: AccountService, private transactionRouter: Router) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(transactions => {
      this.transactions = transactions.data;
      console.log(transactions);
    })
  }

  ShowTransaction = (transaction: Transaction) => {
    this.transactionRouter.navigate([`transaction-description/:${transaction.id}`])
    console.log(transaction);
  }
}
