// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBjSlFAUrgy7H4iCEU9PkysyhMEUqrfCC4",
    authDomain: "ochikoboretorio.firebaseapp.com",
    projectId: "ochikoboretorio",
    storageBucket: "ochikoboretorio.appspot.com",
    messagingSenderId: "543071154977",
    appId: "1:543071154977:web:bceb8c29edc09da38f4460",
    measurementId: "G-M2J4V4B6NM"
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)