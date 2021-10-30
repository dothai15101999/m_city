import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
  apiKey: "AIzaSyArC9EHLJ2zSf9Ctg92PJLT-CFFPr4IWTI",
  authDomain: "mcity-db737.firebaseapp.com",
  projectId: "mcity-db737",
  storageBucket: "mcity-db737.appspot.com",
  messagingSenderId: "786523337418",
  appId: "1:786523337418:web:2c527db8e8bfe201dafa33",
  measurementId: "G-XQQEB8L8EN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
