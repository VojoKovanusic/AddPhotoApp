import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

 
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
 
import { UserProfilComponent } from "../components/user-profil/user-profil.component";
import { HomeComponent } from "../components/home/home.component";
import { PhotoListComponent } from "../components/photo-list/photo-list.component";
import { AddPhotoComponent } from "../components/add-photo/add-photo.component";
 
import { UpdateComponent } from "../components/update/update.component";
import { PaginationComponent } from "../components/pagination/pagination.component";
import { PhotoDetailsComponent } from "../components/photo-details/photo-details.component";
import { AddGpscordinateComponent } from "../components/add-gpscordinate/add-gpscordinate.component";

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
    component: PhotoListComponent,
 
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
    component: PaginationComponent
  },
  {
    path: 'photo/detail',
    component: PhotoDetailsComponent
  },
  {
    path: 'add/coordinate',
    component: AddGpscordinateComponent
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

export const myRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);