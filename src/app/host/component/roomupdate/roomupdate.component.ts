import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { CityService } from 'src/app/service/city.service';
import { RoomService } from 'src/app/service/room.service';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-roomupdate',
  templateUrl: './roomupdate.component.html',
  styleUrls: ['./roomupdate.component.css']
})
export class RoomupdateComponent implements OnInit {
  room;
  id = +this.route.snapshot.paramMap.get('id');
  categories = [];
  cities = [];
  statuses = [];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private categoryService: CategoryService,
    private cityService: CityService,
    private statusService: StatusService) { }
  updateRoomHost: FormGroup;
  ngOnInit() {
    this.updateRoomHost = this.fb.group({
      name: [
        "",
        [Validators.maxLength(120), Validators.minLength(6), Validators.required],
      ],
      address: ["", [Validators.required, Validators.maxLength(250)]],
      category_id: ["", [Validators.required]],
      city_id: ["", Validators.required],
      bedroom: ["", [Validators.required, Validators.min(1)]],
      bathroom: ["", [Validators.required, Validators.min(1)]],
      description: ["", [Validators.required, Validators.maxLength(250)]],
      price: ["", [Validators.required]],
      user_id: [""],
      status_id: ["", [Validators.required]]
    });
    this.roomService.detailRoomHost(this.id).subscribe(data => {
      console.log(data);
      this.room = data.room;
      this.updateRoomHost.patchValue(this.room);
    });
    this.getAllCategory();
    this.getAllCity();
    this.getAllStatus();

  }
  updateRoom() {
    this.roomService.updateRoomHost(this.id, this.updateRoomHost.value).subscribe(res => {
      this.router.navigate(['/host/list']);
      alert("Success")
    })
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  getAllCity() {
    this.cityService.getAllCity().subscribe((res) => {
      this.cities = res;
    });
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe((res) => {
      this.statuses = res;
    });
  }
}
