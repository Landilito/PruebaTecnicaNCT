import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from 'src/app/services/transaction.service';
import { Account } from '../account';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-create-transactions',
  templateUrl: './create-transactions.component.html',
  styleUrls: ['./create-transactions.component.css'],
})
export class CreateTransactionsComponent implements OnInit {

  transaction: Transaction = {
    id: '',
    concept: '',
    description: '',
    ammount: 0,
    accountId: '',
    date: ''
  }

  accounts!: Account[]
  account!: Account

  constructor(private transactionService: TransactionService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.transactionService.getAccounts().subscribe(account => {
      this.accounts = account.data;
      console.log(this.accounts)
  })
}

@HostListener('change', ['$event'])
public getAccount(account: any){
  this.transaction.accountId = account.target.value
  // console.log(this.transaction)
}

  createTransaction(transaction: Transaction){
    transaction.candidateId = 'efbd4282-cdee-462f-be42-1ab3f9d2e28a'
    this.transactionService.createTransaction(transaction).subscribe(transaction=>{},
      (err)=> console.error(err))
      console.log(transaction)
      this.toastr.success('Transaction successfully created!');
  }
}
