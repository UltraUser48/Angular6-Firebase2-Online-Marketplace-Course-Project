import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { WatchList } from '../watch/models/watch-list.model';
import { WatchService } from '../watch/watch.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  watches : Observable<WatchList[]>
  
  constructor(
    private watchService : WatchService
  ) { }
  
  ngOnInit() {
    this.watches = this.watchService
     .getAllWatches();
     console.log(this.watches)
  }
  user = firebase.auth().currentUser.email;

}
