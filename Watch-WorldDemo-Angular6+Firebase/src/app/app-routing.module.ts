import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { WatchModule } from './watch/watch.module';
import { HomeComponent } from './home/home.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopsevenComponent } from './Topseven/Topseven.component';
import { BrandsHistoryComponent } from './brands-history/brands-history.component';
import { MechanismsComponent } from './mechanisms/mechanisms.component';


const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
  ]  },
  { path: 'watches', 
   loadChildren: () => WatchModule ,
   canActivate: [AuthGuard] 
  }, 
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'Topseven', component: TopsevenComponent
  },
  {
    path: 'brands-history', component: BrandsHistoryComponent
  },
  {
    path: 'mechanisms', component: MechanismsComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: 'home'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }