// const firebase = require("firebase");
var express = require("express");
var router = express.Router();
const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');
const firebaseURL = process.env.FIREBASE_DB_URL;

admin.initializeApp(({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dog-ear-d.firebaseio.com/"
}))

const database = admin.database();
const ref = database.ref('users')


/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("You've reached the homepage");
});

// router.get("/users", (req, res, next) => {

// })

router.post("/user", (req, res, next) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  // const usersRef = ref.child('users');
  ref.push(newUser)
  res.json(newUser);
});

module.exports = router;
