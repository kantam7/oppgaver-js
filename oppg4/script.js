var formEl = document.getElementById("form");
var textareaEl = document.getElementById("textarea");

formEl.addEventListener("submit", function(e){
    var data = formEl.elements;
    console.log(data);
    var name = formEl.navn.value;
    var age = formEl.alder.value;
    var drink = formEl.drikke.value
    console.log(name);
    textareaEl.innerHTML = "Hei jeg heter " + name + " og jeg er " + age + " år gammel.\n\nJeg liker " + drink;
    
    e.preventDefault();
})