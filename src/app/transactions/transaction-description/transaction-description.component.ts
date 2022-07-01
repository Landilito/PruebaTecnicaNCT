import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-description',
  templateUrl: './transaction-description.component.html',
  styleUrls: ['./transaction-description.component.css']
})
export class TransactionDescriptionComponent implements OnInit {

  transaction!: Transaction;
  transactionForm!: FormGroup;

  constructor(private transactionService: TransactionService, private router: Router, 
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.transactionForm = this.setupForm();
    this.searchTransactionById();
    const dto = this.transaction;
    this.transactionForm.patchValue({...dto})
     
  }

  setupForm(): FormGroup{
    return this.fb.group({
      concept: [null, Validators.required],
      ammount: [null, Validators.required],
      date: [null, Validators.required], 
      description: [null, Validators.required]
    })
  }


  searchTransactionById(){
    const transactionId = this.router.url.split('/')[2];
    const transactions = this.transactionService.getTransactions().filter(transaction => transaction.id === transactionId);
    this.transaction = transactions[0];
    console.log(this.transaction);
  }

  updateTransaction(transaction: Transaction){
    this.transactionService.updateTransaction(transaction).subscribe(transaction=>{},
    (err)=> console.error(err))
  }

}