
var new_name;
var new_email;
var new_password;

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







async function Update(){

  new_name = document.getElementById("nameid").value;
  new_email = document.getElementById("emailid").value;
  new_password = document.getElementById("passwordid").value;

  const people = db.collection('People').doc(Search_id)
  people.update({
    name: new_name,
    email: new_email,
    password: new_password
  })
  alert('update susscceful');


}

//for update
/*const documento = db.collection('People').doc('3')
documento.update({
name: 'Frank',
email: 'frank090@gmail.com',
phone: '31996449587'
})*/

//for create
/*const documento = db.collection('People').doc('3')
documento.set({
name: 'Frank leite',
email: 'frankleite090@gmail.com',
phone: '31996449587'
})*/
