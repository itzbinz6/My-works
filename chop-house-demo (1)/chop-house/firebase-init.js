// firebase-init.js
// One shared Firebase setup, imported by index.html, menu.html, and admin.html.
// Keeping this in a single file means the config only lives in one place.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlx3gqAS4AoklnPyUkq5mkXFPdnsuDijQ",
  authDomain: "chop-house-demo.firebaseapp.com",
  projectId: "chop-house-demo",
  storageBucket: "chop-house-demo.firebasestorage.app",
  messagingSenderId: "687295091512",
  appId: "1:687295091512:web:f3eb7de14d0580e18127cd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
