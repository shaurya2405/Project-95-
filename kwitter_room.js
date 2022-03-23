var firebaseConfig = {

  apiKey: "AIzaSyC1tjFIbOHW-dIMFqf5-ztU5yCqf1N4nIw",

  authDomain: "project-94-1fe2a.firebaseapp.com",

  databaseURL: "https://project-94-1fe2a-default-rtdb.firebaseio.com",

  projectId: "project-94-1fe2a",

  storageBucket: "project-94-1fe2a.appspot.com",

  messagingSenderId: "637699377829",

  appId: "1:637699377829:web:67a88b61abe3c5bcf0db4c"

};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
      console.log("room_name - "+Room_names);
      row = "<div class='roow_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML = +row;
        //End code
      });
    });
}
getData();
function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location("index.html");  
}