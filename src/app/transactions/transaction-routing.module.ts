import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';
import { CreateTransactionsComponent } from './create-transactions/create-transactions.component';

const routes: Routes = [{path:'', component: TransactionListComponent},
                        {path:'transaction-description/:id', component: TransactionDescriptionComponent},
                        {path: 'create-transaction', component: CreateTransactionsComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionRoutingModule {
 }
