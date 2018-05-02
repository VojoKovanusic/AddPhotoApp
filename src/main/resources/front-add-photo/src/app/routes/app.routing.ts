import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

 
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
import { LocationsComponent } from "../components/locations/locations.component";
import { UserProfilComponent } from "../components/user-profil/user-profil.component";
import { HomeComponent } from "../components/home/home.component";
import { PhotoListComponent } from "../components/photo-list/photo-list.component";
import { AddPhotoComponent } from "../components/add-photo/add-photo.component";
import { SearchComponent } from "../components/search/search.component";
import { UpdateComponent } from "../components/update/update.component";

const appRoutes: Routes=[ {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'photos',
    component: PhotoListComponent,
 
  },
  {
    path: 'locations',
    component: LocationsComponent,
 
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userProfil',
    component: UserProfilComponent
  },
  {
    path: 'add/photo',
    component: AddPhotoComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

export const myRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);