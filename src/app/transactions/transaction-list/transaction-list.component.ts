import { Component, OnInit } from '@angular/core';
import { elementAt, lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] =[{
    id: '',
    concept: '',
    description: '',
    amount: 0,
  }];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => {
      console.log(data);
      // for (let i = 0; i < data.length; i++) {
      //   this.transactions.push(data[i])
      // };
      this.transactions.push(data);
    })
  }

}
