import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankingDetailsPage } from './banking-details';

@NgModule({
  declarations: [
    BankingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BankingDetailsPage),
  ],
  exports: [
    BankingDetailsPage,
  ]
})
export class BankingDetailsModule {}
