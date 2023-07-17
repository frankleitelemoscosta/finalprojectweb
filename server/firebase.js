var Search_id = 0;
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

async function SiguiUp()
{
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
    window.location.href = './login.html';
  }
    else{
      alert('not possible register the user in the data bank, because the password and confirm password is different')
    }
}

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

//for delete user:
function Delete(){
  const documento = db.collection('People').doc(Search_id).delete();
  alert('user delete with susscceful');
}



//for recovery id and update
async function returnId()
{
  var name = document.getElementById("nameidreturn").value;
  var id_docomento = 0;
  const people = db.collection('People')
  const snapshot = await people.where('name','==',name).get()
  

  snapshot.forEach(doc => {
    var dados = doc.data();
    id_documento = doc.id
    
    if(dados.name == name)
    {
      alert(dados.name);
      alert(dados.email);
    }
    else{
      alert('this user not exist.');
    }
  })
  Search_id = id_documento;
}

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
