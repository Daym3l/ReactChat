import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDZFgxXPciSsqDCaonsZ6kqLQzxYOyfdxs",
  authDomain: "reactchat-458e8.firebaseapp.com",
  databaseURL: "https://reactchat-458e8.firebaseio.com"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

