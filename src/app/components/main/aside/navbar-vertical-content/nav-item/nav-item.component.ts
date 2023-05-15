import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {

  private teamConfig: Subscription = new Subscription;

  filter_bu = {
    label: 'Filters',
    clearall: true,
    selectall: true,
    active: true,
    filterList: [
      {
        label: 'Channels',
        value: 'channels',
        slug: 'channels',
        clearall: true,
        selectall: true,
        infoLabel: '',
        infoShow: false,
        position: 0,
        inMeasure: 'inches',
        optionsList: [
          {
            value: 'print',
            label: 'Print',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 600,
            showCount: true,
            position: 0,
            width: '0.7',
            height: '9',
          },
          {
            value: 'digital',
            label: 'Digital',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 1200,
            showCount: true,
            position: 1,
            width: '7',
            height: '9',
          },
          {
            value: 'socialmedia',
            label: 'Social Media',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 700,
            showCount: true,
            position: 2,
            width: '7',
            height: '9',
          },
          {
            value: 'video',
            label: 'Video',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 100,
            showCount: true,
            position: 3,
            width: '7',
            height: '9',
          },
        ],
      },
      {
        label: 'Style',
        value: 'style',
        slug: 'style',
        clearall: true,
        selectall: true,
        infoLabel: '',
        infoShow: false,
        position: 1,
        inMeasure: 'Centimeter',
        optionsList: [
          {
            value: 'modern',
            label: 'Modern',
            infoLabel: '',
            infoShow: true,
            selected: false,
            count: 420,
            showCount: true,
            position: 0,
            width: '7',
            height: '9',
          },
          {
            value: 'vintage',
            label: 'Vintage',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 1200,
            showCount: true,
            position: 1,
            width: '8',
            height: '9',
          },
          {
            value: 'business',
            label: 'Business',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 700,
            showCount: true,
            position: 2,
            width: '7',
            height: "34",
          },
          {
            value: 'healthy',
            label: 'Healthy',
            infoLabel: '',
            infoShow: false,
            selected: false,
            count: 100,
            showCount: true,
            position: 3,
            width: '7',
            height: '9',
          },
        ],
      },
    ],
  };

  filterList: any[] = [];

  filter= {
    label: 'Filters',
    clearall: true,
    selectall: true,
    active: true,
    filterList: this.filterList
  };

  constructor(private teamService: TeamService) {
    console.log("[constructor]:: nav item")
  }

  ngOnInit() {
    console.log("[ngOnInit]:: nav item")

    // Update the label after checking the SDR Config
    this.teamService.getSDRConfigListener().subscribe((config:any) => {
        this.filter.filterList = [];
        config.clientBroswerApp.leftNavbar.filters.forEach((obj: any) => {
          let component = {
            label: obj.name,
            value: obj.slug,
            slug: obj.slug,
            clearall: true,
            selectall: true,
            infoLabel: '',
            infoShow: false,
            position: Number(obj.order),
            inMeasure: ''
          }

          this.filter.filterList.push(component);
        });
    })
  }
}

