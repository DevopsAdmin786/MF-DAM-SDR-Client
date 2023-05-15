import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public APP_LOGO = './assets/img/SD_logo.png';
  private teamSettings = new Subscription();

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamSettings = this.teamService.getSDRConfigListener().subscribe((config: any) => {
      console.log("[LOGO]", config);
      this.APP_LOGO = config.clientBroswerApp.header.logo.url;
    })
  }

}
