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
            food.push(mat.value)
        }
    }
    console.log(food)
})