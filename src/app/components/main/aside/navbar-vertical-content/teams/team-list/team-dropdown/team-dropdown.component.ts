import { AfterViewChecked, Component, ElementRef, Input } from '@angular/core';
import { TeamsModel } from 'src/app/models/teams.model';
@Component({
  selector: 'app-team-dropdown',
  templateUrl: './team-dropdown.component.html',
  styleUrls: ['./team-dropdown.component.scss'],
})
export class TeamDropdownComponent implements AfterViewChecked {
  optionUpdated: number = 0;
  currentValue = null;

  @Input() subTeams: Array<TeamsModel> = [];
  @Input() id: string = '';
  @Input() eleRef: string = '';

  ngAfterViewChecked() {
    this.optionUpdated++;
  }

  constructor(public elementRef: ElementRef) {}

  ngOnInit() {}

}
