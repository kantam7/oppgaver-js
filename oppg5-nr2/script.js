var formEl = document.getElementById("form");
var textarea = document.getElementById("textarea");

formEl.addEventListener("submit", function(e){
    e.preventDefault();

    var data = formEl.elements;
    var name = formEl.navn.value;
    var age = formEl.alder.value;
    var drink = formEl.drikke.value;
    
    var food = [];

    for(var i = 0; i < data.mat.length; i++){
        var mat = data.mat[i]
        if(mat.checked){
            food.push(mat.value);
        }
    }
    console.log(food);
    if(food.length == 0){
        return
    }else if(food.length == 1){
        textarea.innerHTML = "Hei jeg heter " + name + " og er " + age + " år gammel.\n\nJeg liker " + drink + ".\n\nJeg liker å spise " + food + "."
    }else if(food.length == 2){
        textarea.innerHTML = "Hei jeg heter " + name + " og er " + age + " år gammel.\n\nJeg liker " + drink + ".\n\nJeg liker å spise " + food[0] + " og " + food[1] + "."
    }else{
        textarea.innerHTML = "Hei jeg heter " + name + " og er " + age + " år gammel.\n\nJeg liker " + drink + ".\n\nJeg liker å spise " + food[0] + ", " + food[1] + " og " + food[2] + "."
    }


})