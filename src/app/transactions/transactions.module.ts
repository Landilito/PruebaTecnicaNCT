import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDescriptionComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  exports: [
    TransactionListComponent,
    TransactionDescriptionComponent
  ]
})
export class TransactionsModule { }
