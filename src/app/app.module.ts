import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
// import {RepositoriesComponent} from './repositories/repositories.component';
import { AppComponent } from './app.component';
// import { GithubComponent } from './github/github.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';
// import { UpperCasePipe } from './upper-case.pipe';
import {MatMenuModule} from '@angular/material/menu';






@NgModule({
  declarations: [
    AppComponent,
    // GithubComponent,
    // RepositoriesComponent,
    SearchFormComponent,
    // UpperCasePipe
  ],
  imports: [
    BrowserModule,
      RoutingModule,
      RouterModule,
      FormsModule,
      NgProgressModule.forRoot(),
      NgProgressHttpModule.forRoot(),
      // HttpClient,
      HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
