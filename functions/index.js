const functions = require('firebase-functions');
const universal = require(`${process.cwd()}/dist/rtrw-demo/server/main`).app();

exports.ssr = functions.https.onRequest(universal);

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
