import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
 import { GithubComponent } from '../github/github.component';
 import {RepositoriesComponent} from '../repositories/repositories.component'
 import { NgProgressModule } from '@ngx-progressbar/core';
  import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {SearchFormComponent} from '../search-form/search-form.component';
const routes: Routes = [
    {path: 'users', component: GithubComponent},
    {path: 'repositories', component: RepositoriesComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},



];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes),
       NgProgressModule.forRoot(),
        NgProgressHttpModule.forRoot()
  ],
  declarations: [
    GithubComponent,
     RepositoriesComponent,
     SearchFormComponent,
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
