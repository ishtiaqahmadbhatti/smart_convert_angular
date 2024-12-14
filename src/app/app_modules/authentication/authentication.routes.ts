import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent, ForgotpasswordComponent, ChangepasswordComponent } from '../../app_controllers/components.controller';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
];
