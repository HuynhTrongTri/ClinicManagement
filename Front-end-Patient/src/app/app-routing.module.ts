import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './pages/appointment-detail/appointment-detail.component';
import { ListAppointmentComponent } from './pages/list-appointment/list-appointment.component';
import { ListDoctorComponent } from './pages/list-doctor/list-doctor.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'list-doctor', component: ListDoctorComponent },
  {path: 'list-appointment', component: ListAppointmentComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'detail-appointment', component: AppointmentDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
