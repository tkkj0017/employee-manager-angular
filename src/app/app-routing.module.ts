import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'members', component: MembersComponent},
  { path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // app.module.tsでルーティングを使えるようにする
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
