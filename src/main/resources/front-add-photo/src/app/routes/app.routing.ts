import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

 
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
 
import { UserProfilComponent } from "../components/user-profil/user-profil.component";
import { HomeComponent } from "../components/home/home.component";

import { AddPhotoComponent } from "../components/add-photo/add-photo.component";
 
import { UpdateComponent } from "../components/update/update.component";
import { PaginationComponent } from "../components/pagination/pagination.component";
import { PhotoDetailsComponent } from "../components/photo-details/photo-details.component";
import { AddGpscordinateComponent } from "../components/add-gpscordinate/add-gpscordinate.component";
import { DevelopmentToolComponent } from "../components/development-tool/development-tool.component";
import { DeterminationComponent } from "../components/determination-list/determination.component";
import { DeterminationDetailsComponent } from "../components/determination-details/determination-details.component";
import { BootstrapThemeComponent } from "../components/bootstrap-theme/bootstrap-theme.component";
import { DeterminationAddComponent } from "../components/determination-add/determination-add.component";
import { AddCommentComponent } from "../components/add-comment/add-comment.component";
import { AddSugestionComponent } from "../components/add-sugestion/add-sugestion.component";
import { MyAlbumComponent } from "../components/my-album/my-album.component";
import { UpdateUserProfilComponent } from "../components/update-user-profil/update-user-profil.component";

const appRoutes: Routes=[ {
    path: '',
    component: HomeComponent,
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
    component: MyAlbumComponent
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
    path: 'add/photo/search',
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
    path: 'development/tool',
    component: DevelopmentToolComponent
  },
    {
    path: 'determinations',
    component: DeterminationComponent,
  },
  {
    path: 'determination/detail',
    component: DeterminationDetailsComponent,
  },
  {
    path: 'determination/add',
    component: DeterminationAddComponent,
  },
  {
    path: 'bootstrap',
    component: BootstrapThemeComponent,
  },
  {
    path: 'add/comment',
    component: AddCommentComponent,
  },
  {
    path: 'add/sugestion',
    component: AddSugestionComponent,
  },
  {
    path: 'update/user',
    component: UpdateUserProfilComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

export const myRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);