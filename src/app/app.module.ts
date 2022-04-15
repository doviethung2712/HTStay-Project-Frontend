import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListroomComponent } from './admin/room/listroom/listroom.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ListroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
