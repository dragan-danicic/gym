import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateAGroupTrainingComponent } from './components/create-a-group-training/create-a-group-training.component';
import { ViewGroupTrainingsComponent } from './components/view-group-trainings/view-group-trainings.component';
import { ViewTrialTrainingsComponent } from './components/view-trial-trainings/view-trial-trainings.component';
import { ViewGroupTrainingsAndSignUpComponent } from './components/view-group-trainings-and-sign-up/view-group-trainings-and-sign-up.component';
import { SignUpTrialTrainingComponent } from './components/sign-up-trial-training/sign-up-trial-training.component';
import { AddNewTraineeComponent } from './components/add-new-trainee/add-new-trainee.component';
import { SearchTraineesAndChargeAMembercardComponent } from './components/search-trainees-and-charge-a-membercard/search-trainees-and-charge-a-membercard.component';
import { RoleAuthGuard } from './guards/role-auth.guard';
import { TraineeProfileComponent } from './components/trainee-profile/trainee-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewMyTrainingStatsComponent } from './components/view-my-training-stats/view-my-training-stats.component';
import { ViewTrainersStatsComponent } from './components/view-trainers-stats/view-trainers-stats.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up-a-trial-training', component: SignUpTrialTrainingComponent },
  { path: 'add-a-new-trainee', component: AddNewTraineeComponent,canActivate: [RoleAuthGuard], data: { expectedRole: 1 } },
  { path: 'search-trainees-and-charge-a-membercard', component: SearchTraineesAndChargeAMembercardComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'create-a-group-training', component: CreateAGroupTrainingComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'view-group-trainings', component: ViewGroupTrainingsComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'view-trial-trainings', component: ViewTrialTrainingsComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'view-my-stats', component: ViewMyTrainingStatsComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'view-stats-of-others', component: ViewTrainersStatsComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '1' } },
  { path: 'trainee-profile', component: TraineeProfileComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '2' } },
  { path: 'view-group-trainings-and-sign-up', component: ViewGroupTrainingsAndSignUpComponent, canActivate: [RoleAuthGuard], data: { expectedRole: '2' } },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }



