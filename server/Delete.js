var Search_id = 0;

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

//for delete user:
function Delete(){
    const documento = db.collection('People').doc(Search_id).delete();
    alert('user delete with susscceful');
  }
  
  
  
  //for recovery id
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