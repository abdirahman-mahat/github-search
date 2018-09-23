import { Component, OnInit } from '@angular/core';
import{User} from '../user-class/user';
import{SearchRequestService} from '../search-request.service';
import{Repository} from '../repositories-class/repositories';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
   searchMe = 'abdirahman-mahat';
  githubUser: string;

    users: User ;
    repository: Repository;
     searchRepo: string;
     resultCount = 12;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }
   

  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}
