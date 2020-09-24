
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; 
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainersComponent } from './components/trainers/trainers.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateAGroupTrainingComponent } from './components/create-a-group-training/create-a-group-training.component';
import { ViewGroupTrainingsComponent } from './components/view-group-trainings/view-group-trainings.component';
import { ViewTrialTrainingsComponent } from './components/view-trial-trainings/view-trial-trainings.component';
import { ViewGroupTrainingsAndSignUpComponent } from './components/view-group-trainings-and-sign-up/view-group-trainings-and-sign-up.component';
import { SignUpTrialTrainingComponent } from './components/sign-up-trial-training/sign-up-trial-training.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GymService } from './services/gym.service';
import { GymInterceptor } from './services/gym-interceptor';
import { AddNewTraineeComponent } from './components/add-new-trainee/add-new-trainee.component';
import { SearchTraineesAndChargeAMembercardComponent } from './components/search-trainees-and-charge-a-membercard/search-trainees-and-charge-a-membercard.component';
import { ShowTraineeComponent } from './components/show-trainee/show-trainee.component';
import { RoleAuthGuard } from './guards/role-auth.guard';
import { ChooseDurationComponent } from './components/choose-duration/choose-duration.component';
import { TraineeProfileComponent } from './components/trainee-profile/trainee-profile.component';
import { ViewGroupTrainingsRemoveComponent } from './components/view-group-trainings-remove/view-group-trainings-remove.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewTrainersStatsComponent } from './components/view-trainers-stats/view-trainers-stats.component';
import { ViewMyTrainingStatsComponent } from './components/view-my-training-stats/view-my-training-stats.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    HomeComponent,
    ImagesComponent,
    TrainersComponent,
    LogInComponent,
    CreateAGroupTrainingComponent,
    ViewGroupTrainingsComponent,
    ViewTrialTrainingsComponent,
    ViewGroupTrainingsAndSignUpComponent,
    SignUpTrialTrainingComponent,
    AddNewTraineeComponent,
    SearchTraineesAndChargeAMembercardComponent,
    ShowTraineeComponent,
    ChooseDurationComponent,
    TraineeProfileComponent,
    ViewGroupTrainingsRemoveComponent,
    ChangePasswordComponent,
    ViewTrainersStatsComponent,
    ViewMyTrainingStatsComponent,
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [GymService,
    RoleAuthGuard,
    AuthGuard, 
  {
    provide:HTTP_INTERCEPTORS,
    useClass:GymInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
