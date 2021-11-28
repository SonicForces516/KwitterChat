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
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      
}