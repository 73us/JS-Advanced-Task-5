import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works-cenzor/works-cenzor.component';
import { WorksUserlistComponent } from './pages/works-userlist/works-userlist.component';
import { WorksTasklistComponent } from './pages/works-tasklist/works-tasklist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: 'cenzor', component: WorksCenzorComponent },
      { path: 'userlist', component: WorksUserlistComponent },
      { path: 'tasklist', component: WorksTasklistComponent },
      { path: '', pathMatch: 'full', redirectTo: 'works' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
