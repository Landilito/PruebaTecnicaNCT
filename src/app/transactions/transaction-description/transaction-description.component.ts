import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-description',
  templateUrl: './transaction-description.component.html',
  styleUrls: ['./transaction-description.component.css']
})
export class TransactionDescriptionComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

}
