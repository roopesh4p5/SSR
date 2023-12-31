import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'**',component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
