import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listroom = [];
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.roomService.getAllRoom().subscribe(res => {
      console.log(res);
      
      this.listroom = res.room;
    })
  }
}
