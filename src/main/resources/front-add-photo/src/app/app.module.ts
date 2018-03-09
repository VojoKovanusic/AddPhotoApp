import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HttpModule } from '@angular/http';
import { myRouting } from './routes/app.routing';
import { PhotoService } from './service/photo/photo.service';
import { RegisterService } from './service/register/register.service.service';
import { UserService } from './service/user/user.service.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    HomeComponent,
    LocationsComponent,
    LoginComponent,
    MyAlbumComponent,
    NavBarComponent,
    PhotoListComponent,
    RegisterComponent,
    SidePanelComponent,
    UserProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    myRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoplFZqoqqszCytDECZB2kdmedVNiCFJY'
    })


  ],
  providers: [PhotoService,RegisterService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }