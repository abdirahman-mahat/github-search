import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
 import { GithubComponent } from '../github/github.component';
 import { NgProgressModule } from '@ngx-progressbar/core';
  import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {SearchFormComponent} from '../search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import { not } from '@angular/compiler/src/output/output_ast';
import { NotComponent } from '../not/not.component';

const routes: Routes = [
    {path: 'users', component: GithubComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: '**', component:NotComponent}




];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      RouterModule.forRoot(routes),
       NgProgressModule.forRoot(),
        NgProgressHttpModule.forRoot()
  ],
  declarations: [
    GithubComponent,
     SearchFormComponent,
     NotComponent
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
