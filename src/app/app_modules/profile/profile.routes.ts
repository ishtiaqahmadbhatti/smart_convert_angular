import { Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';

export const routes: Routes = [
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'deleteprofile', component: DeleteprofileComponent },
];
