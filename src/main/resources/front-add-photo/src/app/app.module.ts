import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { RegisterComponent } from './components/register/register.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { myRouting } from './routes/app.routing';
import { PhotoService } from './service/photo/photo.service';
import { RegisterService } from './service/register/register.service.service';
import { UserService } from './service/user/user.service.service';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddPhotoService } from './service/add-photo/add-photo.service';
import { BuildFormAddPhoto } from './validation/build.form.AddPhoto';
import { BuildFormRegister } from './validation/build.form.register';
import { UpdateComponent } from './components/update/update.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {DataTableModule} from "angular2-datatable";
import { PaginationComponent } from './components/pagination/pagination.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {NgxPaginationModule} from 'ngx-pagination';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PointService } from './service/point/point.service';
import { AddGpscordinateComponent } from './components/add-gpscordinate/add-gpscordinate.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { DevelopmentToolComponent } from './components/development-tool/development-tool.component';
import { DeterminationComponent } from './components/determination-list/determination.component';
import { DeterminationDetailsComponent } from './components/determination-details/determination-details.component';

import { DeterminationAddComponent } from './components/determination-add/determination-add.component';
import { BuildFormDetermination } from './validation/build.form.determination';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentService } from './service/comment/add-comment.service';
import { AddSugestionComponent } from './components/add-sugestion/add-sugestion.component';
import { UpdateUserProfilComponent } from './components/update-user-profil/update-user-profil.component';

 
@NgModule({
  declarations: [
    // add pagination component to declarations

    AppComponent,
    HomeComponent,
    LoginComponent,
    MyAlbumComponent,
    NavBarComponent,
    RegisterComponent,
    UserProfilComponent,
    AddPhotoComponent,
    UpdateComponent,
    PaginationComponent,
    PhotoDetailsComponent,
    AddGpscordinateComponent,
    DevelopmentToolComponent,
    DeterminationComponent,
    DeterminationDetailsComponent,
    DeterminationAddComponent,
    AddCommentComponent,
    AddSugestionComponent,
    UpdateUserProfilComponent
  ],
  imports: [
    // da mozemo vrsiti Accordion *spustanje texta
    //npm install --save @ng-bootstrap/ng-bootstrap
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    myRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoplFZqoqqszCytDECZB2kdmedVNiCFJY'
    }),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    RecaptchaModule.forRoot()


  ],
  providers: 
  [PhotoService,RegisterService,UserService,PointService,CommentService,
  AddPhotoService,BuildFormAddPhoto,BuildFormRegister,BuildFormDetermination],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
