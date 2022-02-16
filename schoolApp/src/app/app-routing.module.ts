import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './views/login/login.component'
import { VerifyComponent} from './views/verify/verify.component'
import { HomeComponent} from './views/home/home.component'

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'verify', component: VerifyComponent },
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo:  'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
