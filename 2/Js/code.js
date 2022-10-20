// copyright derrendinger valentin

//définitions de variables
var nom = 0;
var age = "t";
var ui = false;
var jeux = false;
var diff = 1;
var prix=89;
var guess=10000;
var essais=0;  
//demande du prénom et de l'age
while (isNaN(nom) == false) {
    nom = prompt("bonjour, bienvenue sur la page du javascript, pour réaliser une experience je vous demande d'entrer votre prénom:")
};
alert("merci !");
while (isNaN(age) == true ) {
    age = prompt("maintenant je vous demande vôtre age")
};
alert("Vous êtes: "+nom+" et vous avez: "+age+"ans, Bienvenue !")
ui=confirm("voulez vous faire un jeu du juste prix ?");




//___________________partie mini-jeux___________________________


if (ui == true){
    alert("bonne chance!");
    diff = prompt("donnez moi le nombre maximum ");
    prix = Math.floor(Math.random()*diff);
    // demande du nombre maximum pour définir la dificultée
    while (jeux == false) {
        essais++;
    guess = prompt("quel est le prix ? : ");
    
    if (guess == prix){
        alert("bravo! "+nom+" vous avez trouvé le prix avec "+essais+" essais !");
        jeux = true;
    }
    else if (guess>prix){
            alert("c'est moins !");
    }
    else if (guess<prix){
            alert("c'est plus !");
    
    }
}
    }
    else{
    alert("au revoir");
}

