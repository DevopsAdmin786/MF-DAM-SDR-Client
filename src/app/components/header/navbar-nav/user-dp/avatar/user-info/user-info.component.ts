import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { initValue, UserDetailsModel } from '../../../../../../models/userInfo.model';
import { UserInfoService } from '../../../../../../services/userInfo.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  // userInfo:UserDetailsModel = {
  //   id: null,
  //   userName: null,
  //   userEmail: null,
  //   userDp: null,
  // };

  userInfo: UserDetailsModel = initValue;
  private appSub: Subscription = new Subscription;

  constructor(public userInfoService: UserInfoService, public teamService: TeamService) {}

  ngOnInit(): void {
    this.userInfoService.getLoggedInDetails();

    this.appSub = this.userInfoService.getLoggedInUserListener()
    .subscribe((userDetails: UserDetailsModel) =>{
      this.userInfo = userDetails;
      this.teamService.getTeamsDetails();
      // this.teamService.getTeamSDRConfig();
    });

    // this.appSub = this.userInfoService.getLoggedInUserListener()
    // .subscribe((userDetails: UserDetailsModel) =>{
    //   this.userInfo = userDetails;
    //   this.teamService.getTeamsDetails();
    // });
  }

  ngOnDestroy(): void {
    this.appSub.unsubscribe();
  }
}
