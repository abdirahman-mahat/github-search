import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repositories-class/repositories';
import{User} from '../user-class/user';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }


}
