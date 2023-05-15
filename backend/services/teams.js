const { default: axios } = require("axios");
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.API_TOKEN}`;

/**
 *
 * @param {string} email
 * @returns User's team tree
 *
 */
const getTeamTree = (email) => {
  return new Promise(async (resolve, reject)=>{
    try {
      const teamTree = await axios.post(`${process.env.API_URL}/team/tree`, {
        current: {
          onBehalfOf: email,
        },
      });

      resolve(teamTree);
    } catch (error) {
      console.log("=== Error occurred while fetching team tree ===");
      reject(error);
    }
  });
};

/**
 *
 * @param {string} email
 * @param {string} signedInTeamId
 * @param {string} actingTeamId
 * @returns Team settings
 */
const getSDREnabledTeam = async (email, signedInTeamId, actingTeamId = "") => {
  return new Promise(async(resolve, reject)=>{
    try {
      console.log("email", email, "SIT", signedInTeamId, "ACT", actingTeamId);
      const teamSettings = await axios.post(
        `${process.env.API_URL}/settings/read`,
        {
          current: {
            onBehalfOf: email,
            signedInTeamId: signedInTeamId,
            actingTeamId: actingTeamId,
          },
        }
      );

      resolve(teamSettings);
    } catch (error) {
      console.log("=== Error occurred while fetching team settings ===");
      reject(error);
    }
  });
};

module.exports = {
  getTeamTree,
  getSDREnabledTeam,
};
