import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';
import { NavbarhostComponent } from '../../layout/navbarhost/navbarhost.component';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  listRoomHost = [];
  currentHost: any = "";
  ngOnInit() {
    this.currentHost = JSON.parse(localStorage.getItem('host'));
    this.getAllRoomHosts();
  }

  getAllRoomHosts() {
    this.roomService.getAllRoomHost(this.currentHost.id).subscribe(res => {
      this.listRoomHost = res.res;
    })
  }

  deleteRoom(id) {
    let x = confirm("Are you sure");
    if (x) {
      this.roomService.deleteRoomHost(id).subscribe(() => {
        this.router.navigate(['/host/list']);
        alert("Success!");
      }, () => {
        alert('error');
      })
    } else {
      this.router.navigate(['/host/list']);
    }

  }





}
