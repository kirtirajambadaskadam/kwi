
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      })  ;
   
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
   }
   
   
   //ADD YOUR FIREBASE LINKS HERE
   const firebaseConfig = {
      apiKey: "AIzaSyDmZP_1EEFamnWlMG6P05JM2Z2C-iIlpRo",
      authDomain: "project93-eab0c.firebaseapp.com",
      databaseURL: "https://project93-eab0c-default-rtdb.firebaseio.com",
      projectId: "project93-eab0c",
      storageBucket: "project93-eab0c.appspot.com",
      messagingSenderId: "544182533390",
      appId: "1:544182533390:web:865eab8ff7d7bb3286ab5f",
      measurementId: "G-GCRJ65D2Z2"
    };
    
    // Initialize Firebase
    const app =firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
         console.log("Room Name -" + Room_names);
         row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML +=row;
         //End code
         });});}
   getData();
   
   function redirectToRoomName(name)
   {
         console.log(name);
         localStorage.setItem("room_name",name)
         window.location="kwitter_page.html"
   }

username=localStorage.getItem("user_name");
document.getElementById("name").innerHTML="Welcome    "+username+"!";


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
} 