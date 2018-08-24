import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WatchList } from './models/watch-list.model';
import { WatchCreate } from './models/watch-create.model';


const baseUrl = 'xxxxxxx'

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  constructor(
    private http : HttpClient
  ) {  }

  getAllWatches() {
    return this.http.get(`${baseUrl}.json`)
      .pipe(map((res : Response) => {
        const ids = Object.keys(res);
        const watches : WatchList[] = [];
        for (const i of ids) {
          watches.push(new WatchList(i, res[i].name, res[i].price,res[i].phone,res[i].condition,
            res[i].imagePath, res[i].description, res[i].author, res[i].date));
        }

        return watches;
      }));
  }

  createWatch(body : WatchCreate) {
    return this.http.post(`${baseUrl}.json`, body);
  }

  getById(watchId : string) {
    return this.http.get<WatchList>(`${baseUrl}${watchId}/.json`);
  }

  editWatch(body) {
    return this.http.patch(`${baseUrl}.json`, body);
  }

  deleteWatch(watchId : string) {
    return this.http.delete(`${baseUrl}${watchId}/.json`);
  }
}