import { Component, OnInit } from '@angular/core';
import { WatchList } from '../models/watch-list.model';
import { WatchService } from '../watch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.css']
})
export class WatchDetailsComponent implements OnInit {
  watch : WatchList;
  id : string;
  user : string;


  constructor(
    private watchService : WatchService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user = firebase.auth().currentUser.email;
    this.watchService.getById(this.id)
      .subscribe(data => {
        this.watch = data;
      })
  }

  delete() {
    this.watchService.deleteWatch(this.id)
      .subscribe((data) => {
        this.toastr.success('Watch delted!', 'Success!');
        this.router.navigate(['/watches/list']);
      })
  }

}
