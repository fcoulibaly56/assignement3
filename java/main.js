// var moyenne = prompt('entrez votre moyenne');
 //console.log(moyenne);
 
 //if (moyenne>=10 && moyenne <12) {
  //  console.log("passable");
    
// }else if (moyenne>=12 && moyenne<14) {
   // console.log('mention assez bien')  
// }else if (moyenne>=14 && moyenne<16) 
   // {
  //  console.log('mention bien')}
   // else if (moyenne>=16 && moyenne<18) 
 //
       // {
     //   console.log('mention très-bien')
  //  }
   // else if (moyenne>=18 && moyenne<20) 
 
      //  {
      //  console.log('excellent')
   // }
   // else{
    //    console.log('moyenne invalide')
   // }

//mon nom
//var myName="fatoumata";
//console.log(myName)
//var a;
//a = 5; // The variable 'a' is equal to 5

//var abc;
//abc = 123; // The variable 'abc' is equal to 123

//fonction
//function Salutation() {
    //alert('Hello world')
    
//}
//Salutation()
//let Salutations = function (){
   // alert('hello world')
//}
//Salutations()

// promise
// var promise1 = new Promise((resolve, reject) =>{
//    let nbr = math.round(math.random()*15)
//    // if(nbr%2==0){
//       resolve("Nombre Pair")
//    }
//    else{
//       reject("Nombre Impair")
//    }
// });
// promise1.then((val)=>{console.log(val);

// })
// promise1.catch((val)=>{console.log(val)});

// let Personne ={
//    nom:"Tom",
//    Prenom:"Jerry",
//    Fonction:"Dev Web Junior",
//    Age: 24,
//    disBonjour : function(){
//       console.log("Bonjour à monsieur"  +  this. nom);
      
//    }
// }
//Personne.disBonjour()
function Personne(nom, prenom, fonction, age) {
   this.nom = nom,
   this.prenom = prenom,
   this.fonction = fonction,
   this.age= age
   
}
let personne1 = new Personne("Oumou","Sissoko", "Architecte", 22)
console.log(personne1);
let personne2 = new Personne("Awa","Thiam", "ingénieur telecom", 35)
console.log(personne2);


