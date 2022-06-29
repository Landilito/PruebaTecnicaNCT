import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';

const routes: Routes = [{path:'', component: TransactionListComponent},
                        {path:'transaction-description/:id', component: TransactionDescriptionComponent}]

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
