import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamsModel, initTeamsValue } from '../models/teams.model';
import { Subject } from 'rxjs';
import { UserInfoService } from './userInfo.service';
import { environment as env } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  public SDRConfig = {success: Boolean, settings: {config: { vics: {} }, license: {}}};
  private teams: TeamsModel = initTeamsValue;
  private teamsUpdated = new Subject<TeamsModel>();
  private getSDRConfig = new Subject();

  constructor(private http: HttpClient, public userInfo: UserInfoService) {}

  getTeamsDetails() {

    this.userInfo.getLoggedInUserListener().subscribe((user) => {
      this.http.post<{ id: string; message: string; data: { teamsInfo: TeamsModel } }>(`${env.apiURL}/teams`, {
        email: user.email
      })
      .subscribe((teamsData) => {
        this.teams = teamsData.data.teamsInfo;
        this.teamsUpdated.next(this.teams);
      })
    })
  }

  getTeamSDRConfig(sit:any) {
    console.log("Getting SDR team config", sit, this.userInfo.userDetails.email);
    const loggedInUser = this.userInfo.userDetails.email;

    return this.http.post(`${env.apiURL}/team/settings`, {
      email: loggedInUser,
      sit
    })
    .subscribe((config: any) => {
      this.SDRConfig = config;
      console.log("====>", this.SDRConfig)
      this.getSDRConfig.next(config.settings.config.vics);
    });
  }

  getTeamsListListener() {
    return this.teamsUpdated.asObservable();
  }

  getSDRConfigListener() {
    return this.getSDRConfig.asObservable();
  }
}
