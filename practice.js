
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCVpXZpxi_Cf5cV4dN9exx2bUKgjRn5vac",
    authDomain: "kwitterapp-f48ff.firebaseapp.com",
    databaseURL: "https://kwitterapp-f48ff-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-f48ff",
    storageBucket: "kwitterapp-f48ff.appspot.com",
    messagingSenderId: "943059391809",
    appId: "1:943059391809:web:d64dfdd04b5f192a8dbdc0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}