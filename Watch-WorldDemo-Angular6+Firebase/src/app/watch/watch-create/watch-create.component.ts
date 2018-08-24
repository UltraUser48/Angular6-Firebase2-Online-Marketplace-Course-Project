import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { WatchCreate } from '../models/watch-create.model';
import { WatchService } from '../watch.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { Router } from '../../../../node_modules/@angular/router';
import { getLocaleDateTimeFormat, formatDate, DatePipe } from '@angular/common';

const now:Date = new Date();

@Component({
  selector: 'app-watch-create',
  templateUrl: './watch-create.component.html',
  styleUrls: ['./watch-create.component.css']
})
export class WatchCreateComponent implements OnInit {
  bindingModel : WatchCreate; 

  constructor(
    private watchService : WatchService,
    private toastr : ToastrService,
    private router : Router,
   
  ) {
    this.bindingModel = new WatchCreate("", "", "","","","", firebase.auth().currentUser.email, now);
  }

  ngOnInit() {
 
  }

  create() {
    this.watchService.createWatch(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Offer created!', 'Success');
        this.router.navigate(['/watches/list']);
      })
  }

}
