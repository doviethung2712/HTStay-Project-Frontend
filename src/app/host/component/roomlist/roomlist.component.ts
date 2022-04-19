import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';
import { NavbarhostComponent } from '../../layout/navbarhost/navbarhost.component';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  constructor(private roomService: RoomService) { }
  listRoomHost = [];
  currentHost: any = "";
  ngOnInit() {
    this.currentHost = JSON.parse(localStorage.getItem('host'));
    this.getAllRoomHosts();
  }

  getAllRoomHosts() {
    console.log(this.currentHost.id);
    
    this.roomService.getAllRoomHost(this.currentHost.id).subscribe(res => {
      console.log(res);

      this.listRoomHost = res.res;
    })
  }




}
