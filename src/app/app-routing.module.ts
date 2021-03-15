import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXChildComponent } from './space-xchild/space-xchild.component';
import { LaunchCompComponent } from './launch-comp/launch-comp.component';

const routes: Routes = [
  { path: 'spaceX', component: SpaceXChildComponent },
  { path: 'spaceX/:launch_year/:launch_success/:land_success', component: LaunchCompComponent },
  { path: '', redirectTo: '/spaceX', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
