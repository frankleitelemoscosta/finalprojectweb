const firebaseConfig = {
    apiKey: "AIzaSyAzBf1RLFrWrGGOh-arv7_96K9BYEHEu2I",
    authDomain: "final-project-web-de030.firebaseapp.com",
    databaseURL: "https://final-project-web-de030-default-rtdb.firebaseio.com",
    projectId: "final-project-web-de030",
    storageBucket: "final-project-web-de030.appspot.com",
    messagingSenderId: "1053054725163",
    appId: "1:1053054725163:web:6f67f669c2dc77ba614e6e",
    measurementId: "G-VBMZLMBR6H"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

async function SiguiUp(){
    //pick elements of the register page
    var name = document.getElementById("nameid");
    var email = document.getElementById("emailid");
    var password = document.getElementById("passwordid");
    var confirm_password = document.getElementById("confirmpasswordid").value;
  
    var submit_name = name.value;
    var submit_email = email.value;
    var submit_phone = password.value;
    var newregister;
    
    if( password.value == confirm_password ){
        newregister = await db.collection('People').add({
        name: submit_name,
        email: submit_email,
        password: submit_phone
    });
    alert('User created with successful!')
    window.location.href = '../screens/login.html';
  }
    else{
      alert('not possible register the user in the data bank, because the password and confirm password is different')
    }
  }