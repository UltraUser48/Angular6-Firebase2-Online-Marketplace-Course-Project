import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WatchStartComponent } from './watch-start/watch-start.component';
import { WatchCreateComponent } from './watch-create/watch-create.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { WatchEditComponent } from './watch-edit/watch-edit.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes : Route[] = [
  { path: '', pathMatch: 'full', component: WatchStartComponent, canActivate: [ AuthGuard ] },
  { path: 'start', component: WatchStartComponent, canActivate: [ AuthGuard ]},
  { path: 'create', component: WatchCreateComponent },
  { path: 'details/:id', component: WatchDetailsComponent },
  { path: 'edit/:id', component: WatchEditComponent },
  { path: 'list', component: WatchListComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class WatchRoutingModule {}