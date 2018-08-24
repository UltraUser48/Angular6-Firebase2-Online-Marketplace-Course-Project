import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchList } from '../models/watch-list.model';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watches : Observable<WatchList[]>

  constructor(
    private watchService : WatchService
  ) { }

  ngOnInit() {
     this.watches = this.watchService
     .getAllWatches();
  }

}
