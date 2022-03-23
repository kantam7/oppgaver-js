var formEl = document.getElementById("form");
var textareaEl = document.getElementById("textarea");
var data;

formEl.addEventListener("submit", function(e){
    e.preventDefault();
    data = formEl.elements;
    console.log(data);

    var name = formEl.navn.value;
    var age = formEl.alder.value;
    var drink = formEl.drikke.value;
    
    
    
    
    textareaEl.innerHTML = "Hei jeg heter " + name + " og jeg er " + age + " år gammel.\n\nJeg liker " + drink;
    
    var food = []
    console.log(data.mat)

    for(var i = 0; i < data.mat.length; i++){
        var mat = data.mat[i]
         
        console.log(mat)
        console.log(mat.checked)
        if(mat.checked){
            food.push(mat.value)
        }
    }
    
    console.log(food)

})