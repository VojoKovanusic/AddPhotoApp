import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
