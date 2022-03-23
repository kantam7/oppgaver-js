// Henter ut form i variabel
var formEl = document.getElementById("form");
var textareaEl = document.getElementById("textarea")


// Lager en event for når formen blir submited, istedet for å kune gjøre det men en knapp
formEl.addEventListener("submit", function(e){
    console.log(formEl);
    // henter ut alle elementer som formen inneholder til variablen data
    var data = formEl.elements;
    // concole logger all data som formen inneholder
    console.log(data);
    // henter ut value til input og legger det i variabelen name
    var name = data.navn.value;
    var age = data.alder.value;
    textareaEl.innerHTML = "Hei jeg heter " + name
    
    // hindrer formen i å refreshe nettsiden
    e.preventDefault();
});