// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:3001',
  firebaseConfig: {
    apiKey: 'AIzaSyBq4I3k8oINsJmevNce8rTpkmuRjh8mDl0',
    authDomain: 'edacy-binding.firebaseapp.com',
    projectId: 'edacy-binding',
    storageBucket: 'edacy-binding.appspot.com',
    messagingSenderId: '506910106068',
    appId: '1:506910106068:web:4ca8ca04b2d1fe04f4f641',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
