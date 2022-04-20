import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  room = [];
  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    router: Router) { }

  ngOnInit() {
    this.showRoom();
  }

  showRoom() {
    this.roomService.detailHome(this.id).subscribe(res => {
      console.log(res);

      this.room = res;
    })
  }


}
