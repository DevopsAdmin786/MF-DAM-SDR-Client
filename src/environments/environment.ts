import {default as authInfo} from '../../auth_config.json';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const localURI = "http://localhost:4200";
const devURI = "https://sdrdev.mediaferry.com";

const server_localURI = "http://localhost:3000/api";
const server_devURI = "https://sdrdevapi.mediaferry.com/api";

const redirectUri = window.location.origin.includes('localhost') ? localURI : devURI;
const apiURL = window.location.origin.includes('localhost') ? server_localURI : server_devURI;

export const environment = {
  production: false,
  apiURL,
  auth:{
    domain:authInfo.dev_domain,
    clientId:authInfo.dev_clientId,
    // redirectUri:window.location.origin
    // redirectUri:'https://mfrqa.mediaferry.com/callback'
    redirectUri
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
