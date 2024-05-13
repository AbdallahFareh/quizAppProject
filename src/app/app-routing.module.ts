import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {EnseignantComponent} from "./enseignant/enseignant.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminTemplateComponent,
    canActivate : [AuthGuard],
    children :[
      {path : "", component : DashboardComponent},
      {
        path : "enseignant", component : EnseignantComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN', 'PROF']}
      },
      {
        path : "etudiant", component : EtudiantComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN', 'PROF']}
      },
      {
        path : "dashboard", component : DashboardComponent
      },


    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
