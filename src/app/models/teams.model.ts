export interface TeamsModel {
  teamId: any;
  tree: any;
  selected: any;
  teamsheader: any;
  team: any;
  teams: Array<TeamsModel>;
}

export const initTeamsValue = {
  tree:null,
  teamId: null,
  selected: null,
  teamsheader: null,
  team: null,
  teams: [],
};
