import { Routes } from '@angular/router';
import { VerifyemailaddressComponent } from './verifyemailaddress/verifyemailaddress.component';
import { VerifymobilenumberComponent } from './verifymobilenumber/verifymobilenumber.component';

export const routes: Routes = [
  { path: 'verifyemailaddress', component: VerifyemailaddressComponent },
  { path: 'verifymobilenumber', component: VerifymobilenumberComponent },
];
