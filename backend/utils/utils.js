const buildTeam = (t) => {
  return {
    team: t.name,
    teamId: t.teamId,
    teamHeader: t.description,
  };
};

const buildSubteams = (team) => {
  const subTeams = [];

  const buildRoot = (team) => {
    return team.subteams.map((t) => {
      buildRoot(t);
      return subTeams.push(buildTeam(t));
    });
  };

  buildRoot(team);
  return subTeams;
};

const buildTeamLevels = (tree) => {
  return new Promise((resolve, reject) => {
    resolve(
      tree.map((t) => {
        let team = buildTeam(t);
        team.teams = buildSubteams(t);
        team.teams.unshift(buildTeam(t));
        return team;
      })
    );
  });
};

module.exports = {
  buildTeamLevels,
};
