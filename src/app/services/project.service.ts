import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamService } from './team.service';
import { UserInfoService } from './userInfo.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public http: HttpClient, public userInfo: UserInfoService, public teamService: TeamService) { }

  getAllProjects() {
    // First get the `teams` and `user` info


  }
}
