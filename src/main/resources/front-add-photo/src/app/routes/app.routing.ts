import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

 
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
import { LocationsComponent } from "../components/locations/locations.component";
import { UserProfilComponent } from "../components/user-profil/user-profil.component";
import { HomeComponent } from "../components/home/home.component";
import { PhotoListComponent } from "../components/photo-list/photo-list.component";

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
    path: '**',
    component: HomeComponent,
  }
];

export const myRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);