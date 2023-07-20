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

  //for recovery data
async function login(){

    var password = document.getElementById("passwordid").value;
    var email = document.getElementById("emailid");
    var dados;
  
      const documento = db.collection('People')
      const snapshot = await documento.where("email","==",email.value).get()
      //const snapshot = await documento.get()
      snapshot.forEach(doc => {
        dados = doc.data()
        console.log(doc.id, ': ',dados.name,dados.email,dados.password)
        if(email.value == dados.email && password == dados.password)
        {
          alert('login successful!');
          window.location.href = './homepage.html';
        }
        else{
          alert('this user not exist in data bank')
        }
  
      });
  
  }