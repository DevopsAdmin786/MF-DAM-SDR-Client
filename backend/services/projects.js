const { default: axios } = require("axios");
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.API_TOKEN}`;


/**
 *
 */
const readProject = async (userInfo, projectInfo) => {

  try {

    const project_OwnerAssets = await axios.post(`${process.env.API_URL}/project/read`, {
      "current": {
        "onBehalfOf": userInfo.email,
        "signedInTeamId": userInfo.sit,
        "actingTeamId": userInfo.aft
      },
      "projectId": projectInfo._id,
      "prKey": projectInfo.prKey
    });

    return project_OwnerAssets;

  } catch(error) {
    console.log("Error while fetching project read info", error)
  }

}

/**
 * @param {email: string, sit: string, aft: string} userInfo
 * @param {_id: string, prKey: string, folder: string, key: string} projectInfo
 *
 */
const getProjectAssets = async (userInfo, projectInfo) => {

  try {

    const project_OwnerAssets = await axios.post(`${process.env.API_URL}/asset/provideSignedGet`, {
      "current": {
        "onBehalfOf": userInfo.email,
        "signedInTeamId": userInfo.sit,
        "actingTeamId": userInfo.aft
      },
      "request": {
        "project": {
            "_id": projectInfo._id,
            "prKey": projectInfo.prKey
        },
        "folder": projectInfo.folder,
        "key": projectInfo.key
      }
    });

    console.log(getProjectAssets);

  } catch(error) {
    console.log("Error while fetching assets", error);
  }

}


module.exports = {
  getProjectAssets,
  readProject
}
