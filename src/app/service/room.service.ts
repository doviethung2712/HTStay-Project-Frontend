import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getAllRoom(): Observable<any> {
    return this.http.get<any>(environment.url_api + `room`);
  }

  getAllRoomHost(id: any): Observable<any> {
    return this.http.get<any>(environment.url_api + `admin/host/${id}`);
  }


}
