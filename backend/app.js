const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

require("dotenv").config();

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.API_TOKEN}`;

const { getTeamTree, getSDREnabledTeam } = require("./services/teams");
const { buildTeamLevels } = require("./utils/utils");
const { getProjectAssets, readProject } = require("./services/projects");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "../node_modules")));

const USER_EMAIL = "kvirk@ekcs.co";
const SIT = "5ebc29765b2a0b65b12e1847";
const AFT = "5ebc29765b2a0b65b12e1847";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/userinfo", (req, res, next) => {
  const userInfo = {
    id: "asdfasdfasdf",
    userName: "Kunal Kvirk",
    userEmail: "kunalkvirk@ekcs.co",
    userDp: "./assets/img/160x160/img6.jpg",
  };

  res.json({
    message: "User information fetched successfully!",
    data: {
      userInfo,
    },
  });
});

app.post("/api/teams", async (req, res, next) => {
  const { email } = req.body;
  const finalData = {
    teamsInfo: {},
  };
  if (!email) {
    return res.send({
      message: "Invalid Request!",
      data: req.body,
    });
  }

  await getTeamTree(email)
    .then(async (teams) => {
      finalData.tree = teams.data;
      return await buildTeamLevels(teams.data);
    })
    .then(async (tree) => {
      return Promise.all(
        tree.map(async (team) => {
          return {
            data: await getSDREnabledTeam(email, team.teamId),
            team,
          };
        })
      );
    })
    .then((checkLicense) => {
      return checkLicense.filter((d) => {
        return (
          d.data.data &&
          d.data.data.smartDesign &&
          d.data.data.smartDesign.license &&
          d.data.data.smartDesign.license.vics &&
          d.data.data.smartDesign.license.vics.licenseKey
        );
      });
    })
    .then((processed) => {
      return processed.map((d) => {
        return d.team;
      });
    })
    .then((finalTree) => {
      finalData.teamsInfo.tree = finalTree;
      return res.send({
        message: "User information fetched successfully!",
        data: finalData,
      });
    });
});

/**
 * Get team settings
 * pass in query params
 * `sit` for signed in teams
 * `aft` for acting for teams
 */
app.post("/api/team/settings", async (req, res) => {
  // Get query params
  const { sit, aft, email } = req.body;
  if (!sit && !aft)
    return res.json({
      success: false,
      message: "`sit` or `aft` query params missing, please check",
    });

  try {
    const getConfig = await axios.post(`${process.env.API_URL}/settings/read`, {
      current: {
        onBehalfOf: email,
        signedInTeamId: sit,
        actingTeamId: aft,
      },
    });

    res.json({
      success: true,
      settings: getConfig.data.smartDesign,
    });

    console.log("Settings", getConfig.data.smartDesign);
  } catch (e) {
    console.log(`Error while fetching SDR config for team`);
    res.json({
      success: false,
      error: e,
    });
  }
});

/**
 * Get project lists
 */
app.get("/api/projects", async (req, res) => {
  // Project list
  // TODO: Paginate it
  // TODO: Attach downloadable asset url for both `owner` and `executor`

  // Get query params
  const { sit, aft } = req.query;

  if (!sit && !aft) {
    return res.json({
      success: false,
      message: "`sit` or `aft` query params missing, please check",
    });
  }

  const projectList = [];

  try {
    const getProjects = await axios.post(
      `${process.env.API_URL}/projects/list`,
      {
        current: {
          onBehalfOf: USER_EMAIL,
          signedInTeamId: sit,
          actingTeamId: aft,
        },
      }
    );

    // Loop over each project and get their 'owner' assets
    for (let i = 0; i < getProjects.data.length; i++) {
      let templateContainer = {};
      let project = getProjects.data[i];

      templateContainer.id = project._id;
      templateContainer.prKey = project.prKey;
      templateContainer.originator = project.originator;
      templateContainer.name = project.name;
      templateContainer.description = project.description;
      templateContainer.idNumber = project.idNumber;

      templateContainer.campaings = await readProject(
        {
          email: USER_EMAIL,
          sit,
          aft,
        },
        {
          _id: project._id,
          prKey: project.prKey,
        }
      )
        .then((d) => d.data)
        .catch((e) => {
          console.log("E", e);
        });

      // const getProjectAsset = await getProjectAssets({
      //   email: USER_EMAIL, sit, aft
      // }, {
      //   _id: project._id,
      //   prKey: project.prKey
      // });

      projectList.push(templateContainer);
    }

    res.json({
      success: true,
      projects: projectList,
    });
  } catch (e) {
    res.json({
      message: "something when wrong!",
      error: e,
    });
  }
});

module.exports = app;
