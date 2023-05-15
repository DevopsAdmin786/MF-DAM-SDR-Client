import {
  AfterViewChecked,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  OnChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamsModel, initTeamsValue } from 'src/app/models/teams.model';
import { SDRConfig } from 'src/app/models/config.model';
import { TeamService } from 'src/app/services/team.service';
import { TeamDropdownComponent } from './team-dropdown/team-dropdown.component';

const HSSideNav = require('../../../../../../../../src/assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside.min.js');
const HSBsDropdown = require('../../../../../../../../src/assets/js/hs.bs-dropdown.js');
const HSFormSearch = require('../../../../../../../../src/assets/vendor/hs-form-search/dist/hs-form-search.min.js');
const HSCore = require('../../../../../../../../src/assets/js/hs.core.js');
const HSTomSelect = require('../../../../../../../../src/assets/js/hs.tom-select.js');

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit, OnDestroy, AfterViewChecked, OnChanges {
  teams: TeamsModel = initTeamsValue;
  teamTree: any = [];

  rootTeams: any = [];
  childTeams: any = [];

  selectedTeam = {
    sit: '',
    aft: '',
    sitLabel: '--',
    aftLabel: '--'
  }

  @ViewChild(TeamDropdownComponent)
  teamDropdownComponent!: TeamDropdownComponent;

  private teamsSub: Subscription = new Subscription();

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamsSub = this.teamService
      .getTeamsListListener()
      .subscribe((teamsDetails: TeamsModel) => {
        this.teams = teamsDetails;
        this.teamTree = teamsDetails.tree;
        this.childTeams = teamsDetails.tree && teamsDetails.tree[0].teams;
        console.log("Teams =>", this.teams);
      });

  }

  ngOnChanges(changes: any) {
    console.log("Changes", changes)
  }

  ngOnDestroy(): void {
    this.teamsSub.unsubscribe();
  }

  ngAfterViewChecked() {
    if (
      this.teamDropdownComponent &&
      this.teamDropdownComponent.optionUpdated === 2
    ) {

      new HSSideNav('.js-navbar-vertical-aside').init();
      HSBsDropdown.init();
      new HSFormSearch('.js-form-search');
      HSCore.components.HSTomSelect = HSTomSelect;
      HSCore.components.HSTomSelect.init('.js-select');

      setTimeout(() => {
        HSCore.init();
        HSTomSelect.getItems().forEach((select: any) => {

          if (select.inputId === 'sit') {
            this.selectedTeam.sit = select.getValue();
          }

          if (select.inputId === 'aft') {
            this.selectedTeam.aft = select.getValue();
          }

          select.on("change", (value: any) => {
            if (select.inputId === 'sit') {
              this.selectedTeam.sit = value;
              // Check if the selected `SIT` has any subteams
              this.teamTree = this.teams.tree.filter((t:any) => t.teamId === this.selectedTeam.sit);
              this.teamChangeHandler(this.selectedTeam.sit);
            }

            if (select.inputId === 'aft') {
              this.selectedTeam.aft = value;
            }
          });

        });

        this.teamChangeHandler(this.selectedTeam.sit);

      }, 10)


    }
  }

  teamChangeHandler(sit = "") {
      console.log("Handling team selection changes", this.selectedTeam);
      this.teamService.getTeamSDRConfig(sit);
      this.teamService.getSDRConfigListener().subscribe((config: any) => {
        this.selectedTeam.sitLabel = config.clientBroswerApp.leftNavbar.teamSelection.l1Dropdown.label;
        this.selectedTeam.aftLabel = config.clientBroswerApp.leftNavbar.teamSelection.l2Dropdown.label;
      });
  }
}
