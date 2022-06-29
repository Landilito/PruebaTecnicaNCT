import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(transactions => {
      this.transactions = transactions.data;
      console.log(transactions);
    })
  }

}
