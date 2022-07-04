import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTransactionsComponent } from './create-transactions/create-transactions.component';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDescriptionComponent,
    CreateTransactionsComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),

  ],
  exports: [
    TransactionListComponent,
    TransactionDescriptionComponent,
    CreateTransactionsComponent
  ]
})
export class TransactionsModule { }
