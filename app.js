var prenom = prompt ("Comment tu t'appelles ?");
console.log(prenom);
var Titre = document.getElementById("Titre");
console.log(titre);
titre.textContent = "Bonjour " + prenom + " !";

if(prenom == "Sarah") {
	alert("Comme moi !")
	titre.style.color = "#008000"
 } else {
    titre.style.color = "#FF0000"
 }