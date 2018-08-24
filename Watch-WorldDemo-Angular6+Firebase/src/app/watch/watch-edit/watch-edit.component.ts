import { Component, OnInit } from '@angular/core';
import { WatchCreate } from '../models/watch-create.model';
import { WatchService } from '../watch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-watch-edit',
  templateUrl: './watch-edit.component.html',
  styleUrls: ['./watch-edit.component.css']
})
export class WatchEditComponent implements OnInit {
  id : string;
  bindingModel : WatchCreate;
 
  constructor(
    private watchService : WatchService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.watchService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id] : this.bindingModel
    }
    
    this.watchService.editWatch(body)
      .subscribe((data) => {
        this.toastr.success('Watch Ad edited Succesfully!', 'Success!');
        this.router.navigate(['/watches/list']);
      })
  }

}
