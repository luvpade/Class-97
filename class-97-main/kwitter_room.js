
var firebaseConfig = {
      apiKey: "AIzaSyAyombNW8flpuk3WY29psktBS3L1EKwMW8",
      authDomain: "kwitter-94b16.firebaseapp.com",
      databaseURL: "https://kwitter-94b16-default-rtdb.firebaseio.com",
      projectId: "kwitter-94b16",
      storageBucket: "kwitter-94b16.appspot.com",
      messagingSenderId: "751250872556",
      appId: "1:751250872556:web:d77fb4d05074d849536dc9",
      measurementId: "G-NERM47N6C7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("romm_name");
      window.location = "kwitter.html";
}

