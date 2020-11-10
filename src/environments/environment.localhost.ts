// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDqot1f953OCGvLF9DBVESz-hG3Hmm9Xi4",
    authDomain: "vhb-timesheet-proto.firebaseapp.com",
    databaseURL: "https://vhb-timesheet-proto.firebaseio.com",
    projectId: "vhb-timesheet-proto",
    storageBucket: "vhb-timesheet-proto.appspot.com",
    messagingSenderId: "1852765916",
    appId: "1:1852765916:web:3749b1da913204f270e619"
  },
  // apiURL: 'http://localhost:8000',
  apiURL: 'https://timesheet-backend-api.herokuapp.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
