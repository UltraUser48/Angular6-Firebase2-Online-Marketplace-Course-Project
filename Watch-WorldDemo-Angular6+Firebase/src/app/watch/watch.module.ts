import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchStartComponent } from './watch-start/watch-start.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { WatchEditComponent } from './watch-edit/watch-edit.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { WatchCreateComponent } from './watch-create/watch-create.component';
import { WatchRoutingModule } from './watch-routing.module';

@NgModule({
  declarations: [
    WatchStartComponent,
    WatchDetailsComponent,
    WatchEditComponent,
    WatchListComponent,
    WatchCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WatchRoutingModule
  ]
})
export class WatchModule { }