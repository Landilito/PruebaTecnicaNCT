import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionRoutingModule } from './transaction-routing.module';



@NgModule({
  declarations: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  exports: [
    TransactionListComponent
  ]
})
export class TransactionsModule { }
