import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
    date: ''
  }

  account!: Account[]



  constructor(private transactionService: TransactionService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.transactionService.getAccounts().subscribe(account => {
      this.account = account.data;
      console.log(this.account)
  })
}

  createTransaction(transaction: Transaction){
    this.transactionService.createTransaction(transaction).subscribe(transaction=>{},
      (err)=> console.error(err))
      console.log(transaction)
      this.toastr.success('Transaction successfully created!');
  }
}
