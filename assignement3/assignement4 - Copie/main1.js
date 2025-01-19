//calculateur de pourboire
function calculerPourboire () {
    //boucle jusqua'à obtenir une entrée valide
    do{
        montantAddition=parseFloat(prompt("Enter the amount of your bill:"));  
        if (isNaN(montantAddition)|| montantAddition<=0) {
            alert("Please enter a amount valid.");
    }
}
while(isNaN(montantAddition)|| montantAddition<=0);
    //definir le pourcentage du pourboire
 let pourcentagePourboire=0;

    //attribution du pourcentage de pourboire
    if(montantAddition>500){
        pourcentagePourboire=0.03;
    }else  if (montantAddition>300) {
        pourcentagePourboire=0.05;//
        
    }else if (montantAddition>100) {
        pourcentagePourboire=0.10//
        
    }else{pourcentagePourboire=0;

    }
    //calculer le montant du pourboire
    let montantPourboire = montantAddition*pourcentagePourboire;
    //afficher montant du pourboire
    alert(`Your addition is ${montantAddition.toFixed(2)} £,The tip will be${montantPourboire.toFixed(2)}£ .`);
    
}
//exécution
calculerPourboire();