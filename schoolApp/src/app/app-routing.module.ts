import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './views/login/login.component'
import { VerifyComponent} from './views/verify/verify.component'
import { HomeComponent} from './views/home/home.component'
import { SignupComponent} from './views/signup/signup.component'
import { PhysicsComponent} from './subjects/physics/physics.component'
import { ChemistryComponent } from './subjects/chemistry/chemistry.component';
import { MathematicsComponent } from './subjects/mathematics/mathematics.component';



const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'verify', component: VerifyComponent },
{ path: 'home', component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'physics', component: PhysicsComponent },
{ path: 'chemistry', component: ChemistryComponent },
{ path: 'mathematics', component: MathematicsComponent },
{ path: '**', redirectTo:  'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
