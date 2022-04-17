import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { ListroomComponent } from './admin/room/listroom/listroom.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { HomeuserComponent } from './user/component/homeuser/homeuser.component';
import { MasterComponent } from './user/master/master.component';


const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListroomComponent }
    ]
  },
  {
    path: "home", component: MasterComponent,
    children: [
      { path: 'list', component: HomeuserComponent }
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
