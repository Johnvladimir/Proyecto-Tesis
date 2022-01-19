import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB3v2ie2Hia0awqXcUrYQ--ciQY3N6l7uk",
    authDomain: "umltoui.firebaseapp.com",
    projectId: "umltoui",
    storageBucket: "umltoui.appspot.com",
    messagingSenderId: "156068452313",
    appId: "1:156068452313:web:8f04723309363f2f9aebc8",
    measurementId: "G-TD25VR53W5"
};
const app = initializeApp(firebaseConfig);

export const DBRealtime = getDatabase(app);